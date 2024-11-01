<script setup lang="ts">
import { ref } from 'vue'
import { useScoreStore } from '@/stores/score'

const scoreStore = useScoreStore()

const realtime = ref(false)

/**
 * Update text on change IF realtime is enabled
 */
function onMessageChange(changeEvent: Event) {
  // Update store on change event only if realtime is enabled
  if (!realtime.value) {
    return
  }

  // Ensure TS is happy with what it receives
  const input = changeEvent.target as HTMLInputElement
  // Save value
  scoreStore.message = input.value
}

function onClear() {
  // Update store on clear event only if realtime is enabled
  if (!realtime.value) {
    return
  }
  // Reset value directly
  scoreStore.message = ''
}

/**
 * Update text on submission
 * @param submitEvent
 */
function submitMessageForm(submitEvent: Event) {
  // Ensure TS is happy with what it receives
  const form = submitEvent.target as HTMLFormElement
  const messageInput = form.elements.namedItem('message') as HTMLInputElement

  // Save value
  scoreStore.message = messageInput.value
}
</script>

<template>
  <v-card>
    <v-form @submit.prevent="submitMessageForm">
      <v-row dense justify-center align-center>
        <v-col class="d-flex justify-center align-center px-6 pt-6">
          <v-text-field
            name="message"
            variant="outlined"
            density="compact"
            size="50"
            clearable
            @click:clear="onClear"
            @keyup="onMessageChange"
            label="Message"
            autocomplete="off"
            hint="Information to be displayed at the bottom of the score board."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify-center align-center>
        <v-col class="d-flex flex-column justify-start align-center">
          <v-checkbox
            v-model="realtime"
            name="realtimeUpdate"
            label="Realtime update"
            density="compact"
            color="success"
          ></v-checkbox>
        </v-col>
        <v-col class="d-flex flex-column justify-start align-center">
          <v-btn :disabled="realtime" variant="outlined" color="green-darken-2" type="submit"> Manual update </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>
