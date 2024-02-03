import { defineStore } from 'pinia'
import type { TimerState } from '@/ts/types/global'

export const useTimerStore = defineStore('timer', {
  state: (): TimerState => {
    return {
      // Initial duration is used in input to configure the timer before it is started
      // In seconds, please use a multiple of 60 ;)
      duration: 45 * 60,
      // Do we already started the countdown ?
      hasStarted: false,
      // Is the countdown currently active ?
      isRunning: false,
    }
  },
  getters: {
    durationInMinutes: (state) => {
      return state.duration / 60
    },
    // Display hours only has sense if the period is longer than 1 hour
    showHours: (state): boolean => state.duration > 3600,
  },
})
