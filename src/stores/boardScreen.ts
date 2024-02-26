import { defineStore } from 'pinia'
import type { BoardScreenState } from '@/ts/types/global'
export const useBoardScreenStore = defineStore('boardScreen', {
  state: (): BoardScreenState => {
    return {
      primaryTitle: "La Ligue d'Impro",
      secondaryTitle: '1/4 Finale',
    }
  },
})
