import useHackerNewsApi from "../hooks/useHackerNewsApi";
import {useState} from 'react';
/**
 * @description 使用自定义Hook获取数据
 * @version 1.0
 * @author wangzhihao
 * @module QueryArticleWithCustomHook
 * @param {Object} _props
 * @returns {JSXElement} 
 * @exports module:QueryArticleWithCustomHook
 */

export default function QueryArticleWithCustomHook(_props) {
  const [data, isLoading, isError, doFetch] = useHackerNewsApi();
  const [query, setQuery] = useState("");
  return (
    <div className="query-article">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
          }}
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button disabled={query ? false : true}>search</button>
        </form>
      </div>
      {isError ? (
        <div>something went wrong...</div>
      ) : isLoading ? (
        "loading..."
      ) : (
        <ol>
          {data &&
            data.hits.map((item) => {
              return (
                <li key={item.objectID}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                  <span style={{ color: "red" }}>&nbsp;{item.author}</span>
                  &nbsp;{new Date(item.created_at).toLocaleString()}
                </li>
              );
            })}
        </ol>
      )}
    </div>
  );
}