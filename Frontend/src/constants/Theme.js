import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#6065a8',
      main: '#393F93',
      dark: '#272c66',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff'
    }
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