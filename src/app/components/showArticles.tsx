import { Box, List, ListItem, ListItemText, Typography } from "@mui/material"
import { readArticles } from "./articleOperator"

export default function ShowArticles(){
    const articles = readArticles()
    return(
        <Box position="fixed">
            <Typography>here is articles</Typography>
            <List>
                {articles.map((text,index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText>{articles[index].time}</ListItemText>
                        <ListItemText>{articles[index].body}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};