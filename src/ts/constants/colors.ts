export type color = {
  key: colorKey
  label: string
  // Can be any CSS supported color: hexa, rgb, hsl, color name,...
  color: string
}

export const colors = {
  blue: {
    key: 'blue',
    label: 'Blue',
    color: '#0054a6',
  },
  yellow: {
    key: 'yellow',
    label: 'Yellow',
    color: '#fdcb3f',
  },
  green: {
    key: 'green',
    label: 'Green',
    color: '#00a651',
  },
  red: {
    key: 'red',
    label: 'Red',
    color: '#d2232a',
  },
}

export type colorKey = keyof typeof colors
