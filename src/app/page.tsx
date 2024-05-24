import { AppBar, CssBaseline, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import theme from './setting';
import React from "react";
import { Inter } from "next/font/google";
import ShowArticles from "./components/showArticles";

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
]

const inter = Inter({subsets: ['cyrillic']})
const DrawerIsOpen :boolean = true;

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <AppBar>
          <Toolbar>
            <Typography>Minerva ChatRadio</Typography>
          </Toolbar>
        </AppBar>
      </header>
      <body>
        <Toolbar/>
        <Grid container spacing={2}>
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