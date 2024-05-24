import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material"
import { readArticles } from "./articleOperator"

export default function ShowArticles(){
    const articles = readArticles()
    return(
        <Box position="sticky">
            <main>
                <h1>ラジオ</h1>
                <List>
                    {articles.map((text,index) => (
                        <Box key={index}>
                            <ListItem key={index} >
                                <ListItemText>{index}</ListItemText>
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