import { Box, Divider, List, ListItem, ListItemText } from "@mui/material"
import { readArticles } from "./articleOperator"

export default function ShowArticles(){
    const articles = readArticles()
    return(
        <Box position="sticky">
            <main>
                <h2>　ラジオ</h2>
                <List>
                    {articles.map((text,index) => (
                        <Box key={index}>
                            <ListItem key={index} >
                                <ListItemText>{articles[index].time}</ListItemText>
                                <ListItemText>{articles[index].body}</ListItemText>
                            </ListItem>
                            <Divider/>
                        </Box>
                    ))}
                </List>
            </main>
        </Box>
    );
};