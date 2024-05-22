import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import theme from './setting';
import React from "react";


const MenuList = ["Home", "ReadMe", "Author", "Contact"];

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h5" noWrap component="div">Minerva-ChatRadio</Typography>
        </Toolbar>
      </AppBar>
      <Box position="fixed">
        <Drawer anchor="left" variant="permanent">
          <Toolbar />
            <List>
              {MenuList.map((text,index) => (
                <ListItem key={text}>
                  <ListItemButton>
                    <ListItemIcon>
                      {text === "Home" && <HomeIcon />}
                      {text === "ReadMe" && <ArticleIcon/>}
                      {text === "Author" && <PersonIcon/>}
                      {text === "Contact" && <ContactSupportIcon/>}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
