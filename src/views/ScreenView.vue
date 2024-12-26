<script setup lang="ts">
import { computed } from 'vue'
import { useScoreStore } from '@/stores/score'
import { useSettingsStore } from '@/stores/settings'
import ScreenBlack from '@/components/screen/black/ScreenBlack.vue'
import ScreenBoard from '@/components/screen/board/ScreenBoard.vue'
import ScreenTitle from '@/components/screen/title/ScreenTitle.vue'

const scoreStore = useScoreStore()
const settingsStore = useSettingsStore()

// Computed to be used as a css variable to change font size of the message
const messageFontSize = computed(() => {
  // Ensure value is within acceptable range
  const size = Math.max(2.5, Math.min(settingsStore.messageFontSize, 5.5))
  return size + 'vh'
})

// Computed to be used as a css variable to change padding of container
const padding = computed(() => {
  // We change padding, but visually it's more about adding margin around content, hence the name of the setting
  const paddingValues = [
    getPaddingValue(settingsStore.margins.top, 'vh'),
    getPaddingValue(settingsStore.margins.right, 'vw'),
    getPaddingValue(settingsStore.margins.bottom, 'vh'),
    getPaddingValue(settingsStore.margins.left, 'vw'),
  ]

  // Build a single variable with the padding values
  return paddingValues.join(' ')
})

// Ensure all a padding value is within acceptable range
// We work with relative values, but we don't want to go lower than the default padding which is 16px
// Keep value within acceptable range
function getPaddingValue(value: number, suffix: string): string {
  value = Math.max(0, Math.min(value, 15))

  // Zero values are replaced by fixed '16px' which is default padding set by Vuetify on screen
  return value === 0 ? '16px' : value + suffix
}
</script>

<template>
  <div v-if="settingsStore.dimmerOpacity" class="dimmer" :style="{ opacity: settingsStore.dimmerOpacity }"></div>
  <Transition name="fade" mode="out-in">
    <ScreenBlack class="screen" v-if="scoreStore.display === 'black'"></ScreenBlack>
    <ScreenBoard class="screen" v-else-if="scoreStore.display === 'score'"></ScreenBoard>
    <ScreenTitle class="screen" v-else-if="scoreStore.display === 'title'"></ScreenTitle>
  </Transition>
</template>

<style>
.dimmer {
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.screen {
  min-height: 100vh;
  font-family: 'Lato', sans-serif;
  padding: v-bind(padding);

  h1 {
    font-family: 'Alfa Slab One', sans-serif;
    font-weight: normal;
    font-size: 6vh;
    text-align: center;
  }

  h2 {
    font-family: 'Lato', sans-serif;
    font-weight: normal;
    font-size: 4vh;
    text-align: center;
  }

  .message {
    font-family: 'Lato', sans-serif;
    font-weight: normal;
    font-size: v-bind(messageFontSize);
    text-align: center;
  }
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
