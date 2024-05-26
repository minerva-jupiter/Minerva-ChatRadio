import CommonElements from "./components/commonElements";
import ShowArticles from "./components/showArticles";

export default function ArticlePage() {
    const nowMainField = <ShowArticles/>;
    return(
        CommonElements(nowMainField)
        
    );
}