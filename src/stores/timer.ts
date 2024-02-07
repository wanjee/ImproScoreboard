import { defineStore } from 'pinia'
import type { TimerState } from '@/ts/types/global'

export const useTimerStore = defineStore('timer', {
  state: (): TimerState => {
    return {
      // Initial duration in milliseconds
      // Is used in input to configure the timer before it is started
      duration: 45 * 60 * 1000,
      // Remaining time in milliseconds
      // Initialised with duration value on start
      // Set to 0 on stop, or when done
      remaining: 0,
      // Last time we start the timer, in milliseconds
      // This value is set to current time on start and pause and set to 0 on stop
      // If not 0 it means the timer has started
      startTime: 0,
      // Is the countdown currently active ?
      isRunning: false,
      // Track time of a reset so we have some reactive that will change each time
      // Duration, as an example, will not always change when we want to reset a timer
      // so it cannot be watched for that purpose
      resetTime: 0,
    }
  },
  getters: {
    durationInMinutes: (state) => {
      return state.duration / 1000 / 60
    },
    // Display hours only has sense if the period is longer than 1 hour
    showHours: (state): boolean => state.duration > 60 * 60 * 1000,
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setDurationFromMinutes(minutes: number) {
      this.duration = minutes * 60 * 1000
    },
  },
})
