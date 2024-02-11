export type logo = {
  // Key helps us to use
  key: logoKey
  label: string
  // File needs to be available in public/img/
  filename: string
}

export const logos = {
  fernand2024: {
    key: 'fernand2024',
    label: 'Fernand 2024',
    filename: 'fernand_2024.png',
  },
  fernand40: {
    key: 'fernand40',
    label: 'Fernand 40th anniversary',
    filename: 'fernand_40.png',
  },
}

export type logoKey = keyof typeof logos
