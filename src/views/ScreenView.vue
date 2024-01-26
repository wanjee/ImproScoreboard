<script setup lang="ts">
import { useScoreBoardStore } from '@/stores/scoreBoard'
import ScreenBlack from '@/components/screen/black/ScreenBlack.vue'
import ScreenBoard from '@/components/screen/board/ScreenBoard.vue'
import ScreenTitle from '@/components/screen/title/ScreenTitle.vue'

const store = useScoreBoardStore()
</script>

<template>
  <ScreenBlack v-if="store.display === 'black'"></ScreenBlack>
  <ScreenBoard v-if="store.display === 'score'"></ScreenBoard>
  <ScreenTitle v-if="store.display === 'title'"></ScreenTitle>
</template>

<style></style>
