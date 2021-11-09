import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#6065a8',
      main: '#393F93',
      dark: '#272c66',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8561c5',
      main: '#673ab7',
      dark: '#482880',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    background: '#fff'
  },
});

export default theme;