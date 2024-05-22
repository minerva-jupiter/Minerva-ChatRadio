import articleJson from './articleJson.json';

export function readArticles(){
    const articles = articleJson.article;
    const articleLength = articles.length;
    return articles;
}