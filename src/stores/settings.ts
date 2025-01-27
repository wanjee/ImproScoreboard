import { defineStore } from 'pinia'
import type { SettingsState } from '@/ts/types/global'
export const useSettingsStore = defineStore('settings', {
  state: (): SettingsState => {
    return {
      dimmerOpacity: 0, // %
      margins: {
        top: 0, // vh
        right: 5, // vw
        bottom: 0, // vh
        left: 5, // vw
      },
      messageFontSize: 4, // vh
    }
  },
  actions: {
    reset() {
      this.dimmerOpacity = 0 // %
      this.margins.top = 0 // vh
      this.margins.right = 5 // vw
      this.margins.bottom = 0 // vh
      this.margins.left = 5 // vw
      this.messageFontSize = 4 // vh
    },
  },
})
