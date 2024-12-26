<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import ScreenBlack from '@/components/screen/black/ScreenBlack.vue'
import ScreenBoard from '@/components/screen/board/ScreenBoard.vue'
import ScreenTitle from '@/components/screen/title/ScreenTitle.vue'

const scoreStore = useScoreStore()
</script>

<template>
  <Transition name="fade" mode="out-in">
    <ScreenBlack class="screen" v-if="scoreStore.display === 'black'"></ScreenBlack>
    <ScreenBoard class="screen" v-else-if="scoreStore.display === 'score'"></ScreenBoard>
    <ScreenTitle class="screen" v-else-if="scoreStore.display === 'title'"></ScreenTitle>
  </Transition>
</template>

<style>
.screen {
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
