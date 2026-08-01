import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: { main: '#00923e', dark: '#1f4931', contrastText: '#ffffff' },
    secondary: { main: '#befc5f', dark: '#54ba63', contrastText: '#1f4931' },
    background: { default: '#f4f8f5', paper: '#ffffff' },
    text: { primary: '#1f4931', secondary: '#4d6959' },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    button: { textTransform: 'none', fontWeight: 700 },
    h1: { fontWeight: 800, letterSpacing: '-0.045em' },
    h2: { fontWeight: 800, letterSpacing: '-0.035em' },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          '&.MuiButton-containedPrimary': {
            boxShadow: '0 12px 30px rgba(0, 146, 62, 0.22)',
            '&:hover': { backgroundColor: '#1f4931' },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { backgroundColor: '#ffffff' },
      },
    },
  },
})
