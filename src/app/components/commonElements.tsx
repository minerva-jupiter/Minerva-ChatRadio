import { ThemeProvider } from "@emotion/react";
import { PaletteMode, createTheme, CssBaseline, AppBar, Toolbar, Typography, Grid, List, MenuList, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import getDesignTokens, { mcrMainField } from "../setting";
import ShowAboutAuthor from "./AboutAuthor";
import ShowReadMe from "./README";
import ShowArticles from "./showArticles";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

type MenuList = {
    index:number;
    name:string;
    link:any;
    icon:React.ReactNode;
  }
  const menulist: MenuList[] = [
    {index:0, name:"Home",link:'./articles', icon:<HomeIcon/>},
    {index:1, name:"ReadMe",link:<ShowReadMe/>, icon:<ArticleIcon/>},
    {index:2, name:"Author",link:<ShowAboutAuthor/>,icon:<PersonIcon/>}
  ];

export default function CommonElements(nowMainField:any) {
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
      CommonElements(nowMainField);
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
              {mcrMainField(nowMainField)}
            </Grid>
          </Grid>
        </body>
      </ThemeProvider>
    );
  }