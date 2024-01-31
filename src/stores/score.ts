import { defineStore } from 'pinia'
import type { ScoreState, teamKey } from '@/ts/types/global'

export const useScoreStore = defineStore('score', {
  state: (): ScoreState => {
    return {
      teams: {
        teamA: {
          name: 'Team A',
          score: 0,
          faults: 0,
          color: '#0054a6', //'#00a651',
        },
        teamB: {
          name: 'Team B',
          score: 0,
          faults: 0,
          color: '#d2232a', // '#ffff00',
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
