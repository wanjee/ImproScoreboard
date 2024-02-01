<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { storeToRefs } from 'pinia'
import { useBoardScreenStore } from '@/stores/boardScreen'

const scoreStore = useScoreStore()
const boardScreenStore = useBoardScreenStore()

const { teams } = storeToRefs(scoreStore)
</script>

<template>
  <v-container fluid fill-height>
    <v-row justify-center align-center>
      <v-col class="d-flex flex-column justify-center align-center">
        <h1>{{ boardScreenStore.primaryTitle }}</h1>
        <h2 v-if="boardScreenStore.secondaryTitle">{{ boardScreenStore.secondaryTitle }}</h2>
      </v-col>
    </v-row>
    <v-row justify-center align-center>
      <v-col v-for="(team, key) in teams" :key="key" cols="6">
        <!--<ScreenBoardTeam :teamKey="key"></ScreenBoardTeam>-->
        <v-card class="team" :style="{ 'background-color': team.color }">
          <v-container>
            <v-row dense justify-center align-center>
              <v-col class="d-flex justify-center align-center pa-6 score-value">
                {{ team.score }}
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions style="background: transparent">
            <v-spacer></v-spacer>
            <v-chip color="red" size="x-large">{{ team.faults }}</v-chip>
            <v-chip color="orange" size="x-large">{{ team.faults % 3 }}</v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify-center align-center>
      <v-col class="d-flex flex-column justify-center align-center"> 45:00 </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.team {
  background: radial-gradient(circle at center top, #000000, transparent 300px),
    radial-gradient(circle at bottom right, #000000, transparent 400px);

  .score-value {
    font-size: xxx-large;
    font-weight: bold;
  }
}
</style>
