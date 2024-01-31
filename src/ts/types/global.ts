export type Team = {
  name: string
  score: number
  faults: number
  color: '#0054a6' | '#ffff00' | '#00a651' | '#d2232a'
}

export type ScoreState = {
  // Everything related to team
  teams: {
    teamA: Team
    teamB: Team
  }
  // One of the available display types
  display: 'black' | 'title' | 'score'
  // In minutes
  periodDuration: number
}

export type teamKey = 'teamA' | 'teamB'

export type ScreenState = {
  primaryTitle: string
  secondaryTitle: string
}

export type BoardScreenState = {} & ScreenState

export type TitleScreenState = {
  showLogo: boolean
  message: string
} & ScreenState
