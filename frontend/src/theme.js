// frontend/src/theme.js
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4791db',
      main: '#1976d2',
      dark: '#115293',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e33371',
      main: '#dc004e',
      dark: '#9a0036',
      contrastText: '#fff',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 500,
      fontSize: '35px',
      letterSpacing: '-0.24px',
      lineHeight: '40px',
    },
    h2: {
      fontWeight: 500,
      fontSize: '29px',
      letterSpacing: '-0.24px',
      lineHeight: '32px',
    },
    h3: {
      fontWeight: 500,
      fontSize: '24px',
      letterSpacing: '-0.06px',
      lineHeight: '28px',
    },
    h4: {
      fontWeight: 500,
      fontSize: '20px',
      letterSpacing: '-0.06px',
      lineHeight: '24px',
    },
    h5: {
      fontWeight: 500,
      fontSize: '16px',
      letterSpacing: '-0.05px',
      lineHeight: '20px',
    },
    h6: {
      fontWeight: 500,
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '20px',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiInputBase: {
      input: {
        fontWeight: 300,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '12.5px 14px',
      },
    },
    MuiCardHeader: {
      root: {
        padding: '16px 24px',
      },
    },
    MuiCardContent: {
      root: {
        padding: '24px',
      },
    },
    MuiCardActions: {
      root: {
        padding: '24px',
      },
    },
  },
});

export default theme;