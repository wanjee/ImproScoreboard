<script setup lang="ts">
import { useTimerStore } from '@/stores/timer'
import TheTimer from '@/components/theTimer.vue'

const timerStore = useTimerStore()

function start() {
  timerStore.isRunning = true
  timerStore.hasStarted = true
}

function pause() {
  // Store remaining time until expected
  timerStore.isRunning = false
}

function stop() {
  timerStore.isRunning = false
  timerStore.hasStarted = false
}

function submitTimerForm(submitEvent: Event) {
  // Ensure TS is happy with what it receives
  const form = submitEvent.target as HTMLFormElement
  const durationInput = form.elements.namedItem('duration') as HTMLInputElement

  timerStore.duration = Number(durationInput.value) * 60
}
</script>

<template>
  <v-card>
    <v-card-title>Timer</v-card-title>
    <v-container>
      <v-row dense justify-center align-center>
        <v-col class="justify-center align-center pa-6 score-value">
          <v-form @submit.prevent="submitTimerForm">
            <v-text-field
              :model-value="timerStore.durationInMinutes"
              name="duration"
              variant="outlined"
              density="compact"
              size="5"
              suffix="Minutes"
              label="Period duration"
              autocomplete="off"
              :disabled="timerStore.hasStarted"
            ></v-text-field>
            <v-btn :disabled="timerStore.hasStarted" variant="outlined" color="success" type="submit"> Set </v-btn>
          </v-form>
        </v-col>
        <v-col class="justify-center align-center pa-6 score-value">
          <TheTimer></TheTimer>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-btn v-if="!timerStore.isRunning" size="default" icon="mdi-play" color="success" @click="start"></v-btn>
      <v-btn v-if="timerStore.isRunning" size="default" icon="mdi-pause" color="warning" @click="pause"></v-btn>
      <v-spacer />
      <v-btn
        size="default"
        icon="mdi-stop"
        color="error"
        title="Stop and reset period to it's original duration"
        @click="stop"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<style></style>
