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
  <v-container fluid class="flex-grow-1 d-flex flex-column flex-nowrap">
    <v-row justify-center align-center class="flex-shrink-1">
      <v-col class="d-flex flex-column justify-center align-center">
        <h1>{{ boardScreenStore.primaryTitle }}</h1>
        <h2 v-if="boardScreenStore.secondaryTitle">{{ boardScreenStore.secondaryTitle }}</h2>
      </v-col>
    </v-row>
    <v-row justify-center align-center class="flex-grow-1">
      <v-col
        v-for="(team, key) in teams"
        :key="key"
        cols="6"
        class="py-0"
        :class="{
          'pl-16': key == 'left',
          'pr-8': key == 'left',
          'pr-16': key == 'right',
          'pl-8': key == 'right',
        }"
      >
        <ScreenBoardTeam :teamKey="key"></ScreenBoardTeam>
      </v-col>
    </v-row>
    <v-row justify-center align-center class="flex-shrink-1">
      <v-col class="d-flex flex-column justify-center align-center py-0 message">
        <!-- We want the message container to always be displayed to avoid the rest of content moving
              without the need for fixed height in css, that should explain the &nbsp; -->
        {{ scoreStore.message }}&nbsp;
      </v-col>
    </v-row>
    <v-row justify-center align-center class="flex-shrink-1">
      <v-col class="d-flex flex-column justify-start align-center py-0">
        <BaseTimer></BaseTimer>
      </v-col>
    </v-row>
  </v-container>
</template>
