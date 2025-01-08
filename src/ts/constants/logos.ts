export type Logo = {
  // Key helps us to use
  key: LogoKey
  label: string
  // File needs to be available in public/img/
  filename: string
}

export const logos = {
  fernand2025: {
    key: 'fernand2025',
    label: 'Fernand 2025',
    filename: 'fernand_2025.png',
  },
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
  coupeMonde2024: {
    key: 'coupeMonde2024',
    label: 'Coupe du Monde 2024',
    filename: 'coupe_du_monde_2024.png',
  },
}

export type LogoKey = keyof typeof logos
