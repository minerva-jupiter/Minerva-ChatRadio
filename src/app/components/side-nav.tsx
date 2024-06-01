import { Box, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ShowAboutAuthor from "./AboutAuthor";
import ShowReadMe from "./README";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

type MenuList = {
    index:number;
    name:string;
    link:any;
    icon:React.ReactNode;
  };
const menulist: MenuList[] = [
    {index:0, name:"Home",link:'./articles', icon:<HomeIcon/>},
    {index:1, name:"ReadMe",link:<ShowReadMe/>, icon:<ArticleIcon/>},
    {index:2, name:"Author",link:<ShowAboutAuthor/>,icon:<PersonIcon/>}
  ];

export function SideNav(): React.JSX.Element {
    
    return (
        <Box>
            <List>
              {menulist.map(({index,name,icon,link}:MenuList) => (
                  <ListItem key={name} disablePadding>
                    <Button href={link}>
                      <ListItemIcon>
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={name}/>
                    </Button>
                  </ListItem>
              ))}
            </List>
        </Box>
    );
}