import { defineStore } from 'pinia'
import type { SettingsState } from '@/ts/types/global'
export const useSettingsStore = defineStore('settings', {
  state: (): SettingsState => {
    return {
      dimmerOpacity: 0,
      margins: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      messageFontSize: 3.5, // vh
    }
  },
  actions: {
    reset() {
      this.dimmerOpacity = 0
      this.margins.top = 0
      this.margins.right = 0
      this.margins.bottom = 0
      this.margins.left = 0
      this.messageFontSize = 3.5 // vh
    },
  },
})
