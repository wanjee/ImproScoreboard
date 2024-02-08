import type { colorKey } from '@/ts/constants/colors'

export type Team = {
  name: string
  score: number
  faults: number
  colorKey: colorKey
}

export type displayType = 'black' | 'title' | 'score'

export type ScoreState = {
  // Everything related to team
  teams: {
    left: Team
    right: Team
  }
  // One of the available display types
  display: displayType
  // In minutes
  periodDuration: number
}

export type teamKey = keyof ScoreState['teams']

export type ScreenState = {
  primaryTitle: string
  secondaryTitle: string
}

export type BoardScreenState = {} & ScreenState

export type TitleScreenState = {
  showLogo: boolean
  message: string
} & ScreenState

export type TimerState = {
  duration: number
  remaining: number
  startTime: number
  isRunning: boolean
  resetTime: number
}
