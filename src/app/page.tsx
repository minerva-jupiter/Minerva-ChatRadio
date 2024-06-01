"use client"
import { AppBar, Button, createTheme, CssBaseline, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, PaletteMode, ThemeProvider, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import React from "react";
import { Inter } from "next/font/google";
import ShowArticles from "./components/showArticles";
import getDesignTokens, { mcrMainField } from './setting';
import ShowReadMe from "./components/README";
import ShowAboutAuthor from "./components/AboutAuthor";
import { Link } from "react-router-dom";
import { SideNav } from "./components/side-nav";

type MenuList = {
  index:number;
  name:string;
  link:any;
  icon:React.ReactNode;
}
const menulist: MenuList[] = [
  {index:0, name:"Home",link:'./article', icon:<HomeIcon/>},
  {index:1, name:"ReadMe",link:<ShowReadMe/>, icon:<ArticleIcon/>},
  {index:2, name:"Author",link:<ShowAboutAuthor/>,icon:<PersonIcon/>}
];



const inter = Inter({subsets: ['cyrillic']})
//mainFieldの初期設定
var nowMainField = <ShowReadMe/>;

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

  const MenuOnClick = (index: number) => {
    nowMainField = menulist[index].link;
  };

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
            <SideNav/>
          </Grid>
          <Grid item xs={10} alignItems="center">
            {mcrMainField(nowMainField)}
          </Grid>
        </Grid>
      </body>
    </ThemeProvider>
  );
}