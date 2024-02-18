<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { storeToRefs } from 'pinia'
import { useBoardScreenStore } from '@/stores/boardScreen'
import BaseTimer from '@/components/BaseTimer.vue'
import ScreenBoardTeam from '@/components/screen/board/team/ScreenBoardTeam.vue'

const scoreStore = useScoreStore()
const boardScreenStore = useBoardScreenStore()

const { teams } = storeToRefs(scoreStore)
</script>

<template>
  <v-row justify-center align-center class="flex-shrink-1">
    <v-col class="d-flex flex-column justify-center align-center">
      <h1>{{ boardScreenStore.primaryTitle }}</h1>
      <h2 v-if="boardScreenStore.secondaryTitle">{{ boardScreenStore.secondaryTitle }}</h2>
    </v-col>
  </v-row>
  <v-row justify-center align-center class="flex-grow-1">
    <v-col v-for="(team, key) in teams" :key="key" cols="6" class="pa-10 pt-0">
      <ScreenBoardTeam :teamKey="key"></ScreenBoardTeam>
    </v-col>
  </v-row>
  <v-row justify-center align-center class="flex-shrink-1">
    <v-col class="d-flex flex-column align-center">
      <BaseTimer></BaseTimer>
    </v-col>
  </v-row>
</template>

<style scoped></style>
