import { defineStore } from 'pinia'
import type { SettingsState } from '@/ts/types/global'
export const useSettingsStore = defineStore('settings', {
  state: (): SettingsState => {
    return {
      dimmerOpacity: 0, // %
      margins: {
        top: 0, // vh
        right: 0, // vw
        bottom: 0, // vh
        left: 0, // vw
      },
      messageFontSize: 3.5, // vh
    }
  },
  actions: {
    reset() {
      this.dimmerOpacity = 0 // %
      this.margins.top = 0 // vh
      this.margins.right = 0 // vw
      this.margins.bottom = 0 // vh
      this.margins.left = 0 // vw
      this.messageFontSize = 3.5 // vh
    },
  },
})
