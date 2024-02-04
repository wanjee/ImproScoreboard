<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import ScreenBlack from '@/components/screen/black/ScreenBlack.vue'
import ScreenBoard from '@/components/screen/board/ScreenBoard.vue'
import ScreenTitle from '@/components/screen/title/ScreenTitle.vue'

const scoreStore = useScoreStore()
</script>

<template>
  <v-container fluid class="screen flex-grow-1 d-flex flex-column flex-nowrap">
    <ScreenBlack v-if="scoreStore.display === 'black'"></ScreenBlack>
    <ScreenBoard v-if="scoreStore.display === 'score'"></ScreenBoard>
    <ScreenTitle v-if="scoreStore.display === 'title'"></ScreenTitle>
  </v-container>
</template>

<style>
.screen {
  min-height: 100vh;
}
</style>
