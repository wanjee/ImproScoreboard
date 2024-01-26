import { defineStore } from 'pinia'
import type { State, teamKey } from '@/ts/types/global'

export const useScoreBoardStore = defineStore('scoreBoard', {
  state: (): State => {
    return {
      teams: {
        teamA: {
          name: 'Team A',
          score: 0,
          faults: 0,
          color: '#d2232a',
        },
        teamB: {
          name: 'Team B',
          score: 0,
          faults: 0,
          color: '#00a651',
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
      // FIXME find a way to get that search at a single place only
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
