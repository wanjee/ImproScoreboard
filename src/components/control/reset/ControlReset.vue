<script setup lang="ts">
import { ref } from 'vue'
import { useScoreStore } from '@/stores/score'

// Indicates dialog is open or not
const showResetDialog = ref(false)

const scoreStore = useScoreStore()

function resetScores() {
  scoreStore.teams['left'].score = 0
  scoreStore.teams['left'].faults = 0
  scoreStore.teams['right'].score = 0
  scoreStore.teams['right'].faults = 0

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
        Are you sure to reset the score ?<br />
        This will set scores and faults to 0. This will not change other settings.
      </v-card-text>
      <v-card-actions>
        <v-btn variant="text" @click="showResetDialog = false"> Cancel </v-btn>
        <v-spacer />
        <v-btn color="error" @click="resetScores"> Reset </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style></style>
