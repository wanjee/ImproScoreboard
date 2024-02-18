<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import type { TeamKey as teamKeyType } from '@/ts/types/global'

defineProps<{
  teamKey: teamKeyType
}>()

const scoreStore = useScoreStore()
</script>

<template>
  <v-container>
    <v-row dense justify-center align-center>
      <v-col class="d-flex justify-end align-center">
        <v-btn
          color="red-darken-2"
          icon="mdi-minus"
          :disabled="scoreStore.teams[teamKey].score <= 0"
          @click="scoreStore.decrementTeamScore(teamKey)"
        ></v-btn>
      </v-col>
      <v-col class="d-flex justify-center align-center score-display">
        {{ scoreStore.teams[teamKey].score }}
      </v-col>
      <v-col class="d-flex justify-start align-center">
        <v-btn color="green-darken-2" icon="mdi-plus" @click="scoreStore.incrementTeamScore(teamKey)"></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.score-display {
  font-size: xxx-large;
  font-weight: bold;
}
</style>
