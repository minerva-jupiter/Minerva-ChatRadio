'use client';
import { PaletteMode } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#440005',
            dark: '#440005',
          },
          secondary: {
            main: '#00443f',
            dark: '#00443f',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#440005',
            dark: '#440005',
          },
          secondary: {
            main: '#00443f',
            dark: '#00443f',
          },
          background: {
            default: '#1e1e1e',
          },
        }),
  },
});

function mcrMainfield() {
  
}

export default getDesignTokens;