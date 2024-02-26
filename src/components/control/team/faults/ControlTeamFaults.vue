<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import type { TeamKey as TeamKeyType } from '@/ts/types/global'

defineProps<{
  teamKey: TeamKeyType
}>()

const scoreStore = useScoreStore()

/**
 * Helper to convert faults from one team to one point to the other team
 * We do that here to have a nice animation on the score board
 *
 * @param teamKey Key of the team we want to convert faults from
 */
function convertFaultsFromTeam(teamKey: TeamKeyType) {
  // Check that we can trigger this
  if (scoreStore.teams[teamKey].faultsPartial < 0 || scoreStore.teams[teamKey].isConversionRunning) {
    return
  }

  // We put every step of this flow in promises
  // even if it would not be necessary for some steps as we don't delay them
  // simply because logic would be more straightforward this way

  Promise.resolve()
    .then(() => {
      // Initialise step
      // Ensure we have only one conversion at a time and allow animation
      scoreStore.teams[teamKey].isConversionRunning = true
      // Revert order of bullets to remove them by simple decrement
      // but still make them initiate a visual move to the opponent team
    })
    .then(() => delay(300))
    // Remove 1st fault
    .then(() => {
      scoreStore.decrementTeamFaultsPartial(teamKey)
    })
    .then(() => delay(300))
    // Remove 2nd fault
    .then(() => {
      scoreStore.decrementTeamFaultsPartial(teamKey)
    })
    .then(() => delay(300))
    // Remove 3rd fault
    .then(() => {
      scoreStore.decrementTeamFaultsPartial(teamKey)
    })
    .then(() => delay(300))
    // Add one point to the other team
    .then(() => {
      const opponentTeamKey: TeamKeyType = teamKey === 'right' ? 'left' : 'right'
      scoreStore.incrementTeamScore(opponentTeamKey)
    })
    // Wait for the score number animation to end
    .then(() => delay(600))
    .then(() => {
      // Finalise step
      // Allow a new conversion to run
      scoreStore.teams[teamKey].isConversionRunning = false
    })
}

/**
 * Helper to add delay between all state changes we want to chain in time
 *
 * @param duration number Amount of milliseconds of delay
 */
function delay(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}
</script>

<template>
  <v-container v-if="scoreStore.teams[teamKey]">
    <v-row dense justify-center align-center>
      <v-col class="d-flex justify-end align-center">
        <v-btn
          color="red-darken-2"
          size="small"
          icon="mdi-minus"
          :disabled="scoreStore.teams[teamKey].faults <= 0"
          @click="scoreStore.decrementTeamFaults(teamKey)"
        ></v-btn>
      </v-col>
      <v-col class="d-flex justify-center align-center fault-value">
        {{ scoreStore.teams[teamKey].faults }} / {{ scoreStore.teams[teamKey].faultsPartial }}
      </v-col>
      <v-col class="d-flex justify-start align-center">
        <v-btn
          color="green-darken-2"
          size="small"
          icon="mdi-plus"
          @click="scoreStore.incrementTeamFaults(teamKey)"
        ></v-btn>
      </v-col>
    </v-row>
    <v-row dense justify-center align-center>
      <v-col class="d-flex justify-center align-center">
        <v-btn
          :disabled="scoreStore.teams[teamKey].faultsPartial < 3"
          variant="outlined"
          size="x-small"
          color="green-darken-2"
          type="submit"
          :loading="scoreStore.teams[teamKey].isConversionRunning"
          @click="convertFaultsFromTeam(teamKey)"
          title="Convert 3 faults to one point for the other team"
        >
          Convert
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.fault-value {
  font-size: xx-large;
  font-weight: bold;
}
</style>
