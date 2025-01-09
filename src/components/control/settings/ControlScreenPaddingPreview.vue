<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

// Computed to be used as a css variable to change padding of container
const padding = computed(() => {
  // We change padding, but visually it's more about adding margin around content, hence the name of the setting
  const paddingValues = [
    settingsStore.margins.top + '%',
    settingsStore.margins.right + '%',
    settingsStore.margins.bottom + '%',
    settingsStore.margins.left + '%',
  ]

  // Build a single variable with the padding values
  return paddingValues.join(' ')
})
</script>

<template>
  <div class="padding-preview">
    <div class="padding-preview-inner"></div>
  </div>
</template>

<style>
.padding-preview {
  height: 25vh;
  width: 100%;
  /* green-darken-3 */
  background-color: #424242;
  border: 1px dashed #424242;
  padding: v-bind(padding);

  .padding-preview-inner {
    height: 100%;
    width: 100%;
    /* grey-darken-4 */
    background-color: #212121;
  }
}
</style>
