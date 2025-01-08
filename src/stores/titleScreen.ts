import { defineStore } from 'pinia'
import type { TitleScreenState } from '@/ts/types/global'

export const useTitleScreenStore = defineStore('titleScreen', {
  state: (): TitleScreenState => {
    return {
      primaryTitle: "La Ligue d'Impro",
      secondaryTitle: '1/4 Finale',
      logoKey: 'fernand2025',
      message: '',
    }
  },
})
