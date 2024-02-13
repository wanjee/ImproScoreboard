import type { ColorKey } from '@/ts/constants/colors'
import type { LogoKey } from '@/ts/constants/logos'

export type Team = {
  name: string
  score: number
  faults: number
  colorKey: ColorKey
}

export type DisplayType = 'black' | 'title' | 'score'

export type ScoreState = {
  // Everything related to team
  teams: {
    left: Team
    right: Team
  }
  // One of the available display types
  display: DisplayType
  // In minutes
  periodDuration: number
}

export type TeamKey = keyof ScoreState['teams']

export type ScreenState = {
  primaryTitle: string
  secondaryTitle: string
}

export type BoardScreenState = {} & ScreenState

export type TitleScreenState = {
  logoKey: LogoKey
  message: string
} & ScreenState

export type TimerState = {
  duration: number
  remaining: number
  startTime: number
  isRunning: boolean
  resetTime: number
}
