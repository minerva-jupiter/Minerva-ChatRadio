"use client"
import { AppBar, createTheme, CssBaseline, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, PaletteMode, ThemeProvider, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import React from "react";
import { Inter } from "next/font/google";
import ShowArticles from "./components/showArticles";
import getDesignTokens from './setting';
import ShowReadMe from "./components/README";

type MenuList = {
  index:Number;
  name:string;
  link:React.ReactNode;
  icon:React.ReactNode;
}
const menulist: MenuList[] = [
  {index:0, name:"Home",link:<ShowArticles/>, icon:<HomeIcon/>},
  {index:1, name:"ReadMe",link:<ShowReadMe/>, icon:<ArticleIcon/>},
  {index:2, name:"Author",link:<a />,icon:<PersonIcon/>},
  {index:3, name:"Contact",link:'./contact',icon:<ContactSupportIcon/>}
];



const inter = Inter({subsets: ['cyrillic']})
var nowMainField = <ShowArticles/>;

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
            <List>
              {menulist.map(({index,name,icon}:MenuList) => (
                <ListItem key={name} disablePadding>
                  <ListItemButton onClick={() => MenuOnClick(index)}>
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
            {nowMainField}
          </Grid>
        </Grid>
      </body>
    </ThemeProvider>
  );
}