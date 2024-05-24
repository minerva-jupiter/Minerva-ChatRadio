'use client';
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary:{
      main: '#440005',
      dark: '#440005',
    },
    background: {
      default: '#1e1e1e',
    }
  },
})

export default theme;