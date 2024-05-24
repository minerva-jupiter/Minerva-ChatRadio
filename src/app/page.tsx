"use client"
import { AppBar, createTheme, CssBaseline, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, PaletteMode, ThemeProvider, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import React from "react";
import { Inter } from "next/font/google";
import ShowArticles from "./components/showArticles";
import { grey } from "@mui/material/colors";
import { dark } from "@mui/material/styles/createPalette";

type MenuList = {
  name:string;
  link:string;
  icon:React.ReactNode;
}
const menulist: MenuList[] = [
  {name:"Home",link:'./home',icon:<HomeIcon/>},
  {name:"ReadMe",link:'../README',icon:<ArticleIcon/>},
  {name:"Author",link:'https://sites.google.com/view/juppiter',icon:<PersonIcon/>},
  {name:"Contact",link:'./contact',icon:<ContactSupportIcon/>}
];

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

const inter = Inter({subsets: ['cyrillic']})
const DrawerIsOpen :boolean = true;

export default function Home() {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'dark',
        );
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h5" alignItems="center" >Minerva ChatRadio</Typography>
        </Toolbar>
      </AppBar>
      <body>
        <Toolbar/>
        <Grid container spacing={5}>
          <Grid item xs="auto">
            <List>
              {menulist.map(({name,link,icon}:MenuList) => (
                <ListItem key={name} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={name}/>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={10} alignItems="center">
            <ShowArticles></ShowArticles>
          </Grid>
        </Grid>
      </body>
    </ThemeProvider>
  );
}