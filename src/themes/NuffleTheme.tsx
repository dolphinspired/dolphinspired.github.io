import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#d8c08c',

    },
    secondary: {
      main: '#fccdd3',
    },
  },
};

function NuffleTheme() {
  return {
    colors: {
      primary: '#FF5733',
      secondary: '#C70039',
      background: '#F0F0F0',
      text: '#333333',
      border: '#CCCCCC',
    },
  };
}

export default NuffleTheme;