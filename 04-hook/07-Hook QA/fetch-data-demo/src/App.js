/* eslint-disable no-unused-vars */
import "./App.css";
import Article from "./content/Article";
// import QueryArticle from "./content/QueryArticle";
// import QueryArticleWithCustomHook from "./content/QueryArticleWithCustomHook";
import QueryArticleWithReducerHook from "./content/QueryAarticleWithReducerHook";
function App() {
  return (
    <div className="App">
      <Article />
      {/* <QueryArticle /> */}
      {/* <QueryArticleWithCustomHook /> */}
      <QueryArticleWithReducerHook />
    </div>
  );
}

export default App;
