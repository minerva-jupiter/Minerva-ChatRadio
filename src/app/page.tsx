import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


const MenuList = ["Home", "ReadMe", "Author", "Contact"];

const MenuListRecord = {
  "Home": <HomeIcon />,
  "ReadMe": <ArticleIcon />,
  "Author": <PersonIcon />,
  "Contact": <ContactSupportIcon />,
}

const drawerWidth = 240;

export default function Home() {

  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">Minerva-ChatRadio</Typography>
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
                      
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
        </Drawer>
      </Box>

    </>
  );
}
