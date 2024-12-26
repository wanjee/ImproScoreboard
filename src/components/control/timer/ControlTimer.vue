<script setup lang="ts">
import { useTimerStore } from '@/stores/timer'
import BaseTimer from '@/components/BaseTimer.vue'
import getRemainingTime from '@/ts/utilities/getRemainingTime'
import { ref } from 'vue'

const timerStore = useTimerStore()

const isFormValid = ref(false)

/**
 * This component has all controls for BaseTimer, it updates shared state
 * so that BaseTimer can react to it to display the remaining time.
 */

/**
 * Click on start button
 *
 * Start timer for initial duration or resume for remaining time
 */
function start() {
  // Refresh startTime because that from there that we need to calculate remaining time
  timerStore.startTime = Date.now()
  // Obviously it's not paused or stopped anymore
  timerStore.isRunning = true

  // If there is no remaining time (e.g. we hit stop button) we get the remaining time
  // from configured duration
  if (timerStore.remaining == 0) {
    timerStore.remaining = timerStore.duration
  }
}

/**
 * Click on pause button
 *
 * Pause timer and calculate remaining time to allow later resume
 */
function pause() {
  // Store remaining time, so we can resume timer display to the correct value
  timerStore.remaining = getRemainingTime(timerStore.startTime, timerStore.remaining)
  timerStore.isRunning = false
}

/**
 * Click on stop button
 *
 * Reinitialise everything, it will also enable back the configuration form
 */
function stop() {
  timerStore.startTime = 0
  timerStore.remaining = 0
  timerStore.isRunning = false
}

/** Validation rules for the duration field */
const rules = {
  required: (value: string) => !!value || 'Required',
  isNumber: (value: string) => {
    // Use '+value' to try to convert string to number first
    return (Number(+value) && +value > 0) || 'Must be a positive number'
  },
}

/**
 * Update timer configuration (initial duration)
 * @param submitEvent
 */
function submitTimerForm(submitEvent: Event) {
  const form = submitEvent.target as HTMLFormElement
  const durationInput = form.elements.namedItem('duration') as HTMLInputElement

  // Minutes to milliseconds
  timerStore.setDurationFromMinutes(Number(durationInput.value))
  // Store resetTime to have something we can watch that will always change when
  // form is submitted, even if configuration is strictly the same.  This allows restart of
  // a new period with identical time (which will be the most common use case)
  timerStore.resetTime = Date.now()
}
</script>

<template>
  <v-card min-height="100%">
    <template v-slot:append>
      <!-- Add tooltip on the switch -->
      <v-tooltip location="start" text="Show timer on score board">
        <template v-slot:activator="{ props }">
          <!-- Wrap switch in a div that will be able to receive activator props -->
          <div v-bind="props">
            <v-switch
              v-model="timerStore.isVisible"
              hide-details
              inset
              color="green-darken-2"
              true-icon="mdi-eye"
              false-icon="mdi-eye-off"
            ></v-switch>
          </div>
        </template>
      </v-tooltip>
    </template>
    <v-container>
      <v-row dense justify-center align-center>
        <v-col class="d-flex justify-center align-center pa-6">
          <BaseTimer in-control></BaseTimer>
        </v-col>
        <v-col class="d-flex justify-center align-center pa-6">
          <v-form
            class="d-flex flex-column justify-center align-center"
            fast-fail
            v-model="isFormValid"
            @submit.prevent="submitTimerForm"
          >
            <v-text-field
              :model-value="timerStore.durationInMinutes"
              name="duration"
              variant="outlined"
              density="compact"
              size="5"
              suffix="Minutes"
              label="Period duration"
              autocomplete="off"
              :disabled="timerStore.startTime > 0"
              :rules="[rules.required, rules.isNumber]"
            ></v-text-field>
            <v-btn
              :disabled="timerStore.startTime > 0 || !isFormValid"
              variant="outlined"
              color="green-darken-2"
              type="submit"
            >
              Set timer
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-spacer />
      <v-btn
        v-if="!timerStore.isRunning"
        variant="outlined"
        size="default"
        icon="mdi-play"
        color="green-darken-2"
        @click="start"
      ></v-btn>
      <v-btn
        v-if="timerStore.isRunning"
        variant="outlined"
        size="default"
        icon="mdi-pause"
        color="orange-darken-2"
        @click="pause"
      ></v-btn>
      <v-spacer />
      <v-btn
        variant="outlined"
        size="default"
        icon="mdi-stop"
        color="red-darken-2"
        title="Stop and reset period to it's original duration"
        @click="stop"
      ></v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>
