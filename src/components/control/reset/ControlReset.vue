<script setup lang="ts">
import { ref } from 'vue'
import { useScoreStore } from '@/stores/score'

// Indicates dialog is open or not
const showResetDialog = ref(false)

const scoreStore = useScoreStore()

function resetScores() {
  scoreStore.teams['teamA'].score = 0
  scoreStore.teams['teamA'].faults = 0
  scoreStore.teams['teamB'].score = 0
  scoreStore.teams['teamB'].faults = 0

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
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn color="error" @click="resetScores">Reset scores</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        Are you sure to reset the score ?<br />
        This will set scores and faults to 0. This will not change other settings.
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style></style>
