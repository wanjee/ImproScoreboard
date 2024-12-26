import type { ColorKey } from '@/ts/constants/colors'
import type { LogoKey } from '@/ts/constants/logos'

// Margin type to facilitate manipulation of the 4 margins of an item
export type Margins = {
  top: number
  right: number
  bottom: number
  left: number
}

// Settings of the app: font-size, margins, dimmer,...
export type SettingsState = {
  // Allow diminution of projected light, so board is less prominent.  0 to 1 value.
  dimmerOpacity: number
  // Margin are used to adjust content position when the projector displays an image outside the screen dimensions
  margins: Margins
  // Allow slight increase of font size for messages; so they are easier to read when screen display is small
  // In VH unit
  messageFontSize: number
}

// One team, with score, faults, color,...
export type Team = {
  name: string
  score: number
  faults: number
  faultsPartial: number
  colorKey: ColorKey
  isConversionRunning: boolean
}

// Possible public display modes
export type DisplayType = 'black' | 'title' | 'score'

// What we are displaying on the public display, regarding the current match
export type ScoreState = {
  // Everything related to team
  teams: {
    left: Team
    right: Team
  }
  // One of the available display types
  display: DisplayType
  message: string
}

export type TeamKey = keyof ScoreState['teams']

// Public displays basic configuration
export type ScreenState = {
  primaryTitle: string
  secondaryTitle: string
}

// Public display in 'score' mode configuration
export type BoardScreenState = {} & ScreenState

// Public display in 'title' mode configuration
export type TitleScreenState = {
  logoKey: LogoKey
  message: string
} & ScreenState

// Timer management
export type TimerState = {
  duration: number
  remaining: number
  startTime: number
  isRunning: boolean
  isVisible: boolean
  resetTime: number
}
