import { defineStore } from 'pinia'
import type { Team } from '@/ts/types/global'

type State = {
  // Everything related to team
  teams: Team[]
  // One of the available display types
  display: 'black' | 'title' | 'score'
  // In minutes
  periodDuration: number
}

export const useScoreBoardStore = defineStore('scoreBoard', {
  state: (): State => {
    return {
      teams: [
        {
          id: 1,
          name: 'Team A',
          score: 0,
          faults: 0,
          color: '#d2232a',
        },
        {
          id: 2,
          name: 'Team B',
          score: 0,
          faults: 0,
          color: '#00a651',
        },
      ],
      display: 'title',
      periodDuration: 45,
    }
  },
  getters: {
    getTeamById: (state) => {
      return (id: number) => state.teams.find((team) => team.id === id)
    },
  },
  actions: {
    incrementTeamScore(id: number) {
      // FIXME find a way to get that search at a single place only
      const team = this.teams.find((obj) => obj.id === id)
      if (team) {
        team.score++
      }
    },
    decrementTeamScore(id: number) {
      const team = this.teams.find((obj) => obj.id === id)
      // Prevent negative score
      if (team && team.score > 0) {
        team.score--
      }
    },
    incrementTeamFaults(id: number) {
      const team = this.teams.find((obj) => obj.id === id)
      if (team) {
        team.faults++
      }
    },
    decrementTeamFaults(id: number) {
      const team = this.teams.find((obj) => obj.id === id)
      // Prevent negative faults count
      if (team && team.faults > 0) {
        team.faults--
      }
    },
  },
})
