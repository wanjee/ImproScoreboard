<script setup lang="ts">
import { ref } from 'vue'
import { useScoreStore } from '@/stores/score'
import { useTimerStore } from '@/stores/timer'

// Indicates dialog is open or not
const showResetDialog = ref(false)

const scoreStore = useScoreStore()
const timerStore = useTimerStore()

function reset() {
  scoreStore.reset()
  timerStore.reset()

  showResetDialog.value = false
}
</script>

<template>
  <v-dialog v-model="showResetDialog" width="auto">
    <template v-slot:activator="{ props }">
      <v-btn
        icon="mdi-restart"
        color="red"
        elevation="2"
        @click="showResetDialog = true"
        v-bind="props"
        title="Reset scores"
      ></v-btn>
    </template>
    <v-card>
      <v-toolbar>
        <v-btn icon="mdi-close" @click="showResetDialog = false"></v-btn>
      </v-toolbar>
      <v-card-text>
        <h4>
          <v-icon icon="mdi-alert" color="error"></v-icon>
          Are you sure to reset scores and timer ?
          <br /><br />
        </h4>
        <p>
          Scores and faults reset to 0.<br />
          Timer is stopped and reset to its default duration.<br />
          Settings (team colors, titles,...) are <strong>not</strong> reset.
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn variant="text" @click="showResetDialog = false"> Cancel </v-btn>
        <v-spacer />
        <v-btn color="error" @click="reset"> Reset </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style></style>
