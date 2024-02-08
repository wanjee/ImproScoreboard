import { defineStore } from 'pinia'
import type { ScoreState, teamKey } from '@/ts/types/global'

export const useScoreStore = defineStore('score', {
  state: (): ScoreState => {
    return {
      teams: {
        left: {
          name: 'Left',
          score: 0,
          faults: 0,
          colorKey: 'blue',
        },
        right: {
          name: 'Right',
          score: 0,
          faults: 0,
          colorKey: 'red',
        },
      },
      display: 'title',
      periodDuration: 45,
    }
  },
  getters: {
    getTeamByKey: (state) => {
      return (key: teamKey) => state.teams[key]
    },
  },
  actions: {
    incrementTeamScore(key: teamKey) {
      const team = this.teams[key]
      if (team) {
        team.score++
      }
    },
    decrementTeamScore(key: teamKey) {
      const team = this.teams[key]
      // Prevent negative score
      if (team && team.score > 0) {
        team.score--
      }
    },
    incrementTeamFaults(key: teamKey) {
      const team = this.teams[key]
      if (team) {
        team.faults++
      }
    },
    decrementTeamFaults(key: teamKey) {
      const team = this.teams[key]
      // Prevent negative faults count
      if (team && team.faults > 0) {
        team.faults--
      }
    },
  },
})
