import { defineStore } from 'pinia'
import type { TitleScreenState } from '@/ts/types/global'

export const useTitleScreenStore = defineStore('titleScreen', {
  state: (): TitleScreenState => {
    return {
      primaryTitle: "La Ligue d'Impro",
      secondaryTitle: '🔞 Match No Limit 🔞',
      logoKey: 'fernand40',
      message: 'www.ligueimpro.be',
    }
  },
})
