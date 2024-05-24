import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import theme from './setting';
import React from "react";
import { Inter } from "next/font/google";
import ShowArticles from "./components/showArticles";
import { AddBoxOutlined } from "@mui/icons-material";

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

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header className={inter.className}>
        <AppBar>
          <Toolbar>
            <Typography variant="h5" noWrap component="div">Minerva-ChatRadio</Typography>
          </Toolbar>
        </AppBar>
      </header>
      <Box position="sticky">
        <Drawer anchor="left" variant="permanent">
          <Toolbar/>
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
        </Drawer>
        <Box>
          <Typography>here is articles</Typography>
          <ShowArticles></ShowArticles>
        </Box>
      </Box>
    </ThemeProvider>
  );
}