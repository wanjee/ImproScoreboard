import { defineStore } from 'pinia'
import type { ScoreState, TeamKey } from '@/ts/types/global'

export const useScoreStore = defineStore('score', {
  state: (): ScoreState => {
    return {
      teams: {
        left: {
          name: 'Left',
          score: 0,
          faults: 0,
          faultsPartial: 0,
          colorKey: 'blue',
        },
        right: {
          name: 'Right',
          score: 0,
          faults: 0,
          faultsPartial: 0,
          colorKey: 'red',
        },
      },
      display: 'title',
      periodDuration: 45,
    }
  },
  getters: {
    getTeamByKey: (state) => {
      return (key: TeamKey) => state.teams[key]
    },
  },
  actions: {
    incrementTeamScore(key: TeamKey) {
      const team = this.teams[key]
      if (team) {
        team.score++
      }
    },
    decrementTeamScore(key: TeamKey) {
      const team = this.teams[key]
      // Prevent negative score
      if (team && team.score > 0) {
        team.score--
      }
    },
    incrementTeamFaults(key: TeamKey) {
      const team = this.teams[key]
      if (team) {
        // Adding one fault to total and to partial counter
        team.faults++
        team.faultsPartial++
      }
    },
    decrementTeamFaults(key: TeamKey) {
      const team = this.teams[key]
      // Prevent negative faults count
      if (team && team.faults > 0) {
        // Remove one fault from total
        team.faults--

        if (team.faultsPartial == 0) {
          // If we add to remove one point from total but we have none in partial
          // it means we probably just converted
          team.faultsPartial = 2
        } else if (team.faultsPartial > 0) {
          // Remove one fault to partial if needed
          team.faultsPartial--
        }
      }
    },
    decrementTeamFaultsPartial(key: TeamKey) {
      // We don't have a increment counterpart to this function as
      // partial faults counter will always be incremented together with total
      const team = this.teams[key]
      // Prevent negative faults count
      if (team && team.faultsPartial > 0) {
        // Remove one fault from total
        team.faultsPartial--
      }
    },
  },
})
