import { useState } from "react";
import useDataApiWithReducer from "../hooks/useDataApiWithReducer";
/**
 * @description 查询文章 在自定义hook中使用reducer Hook替代state hook完成保存API获取数据状态的功能
 * @module QueryArticleWithReducerHook
 * @version 1.0
 * @author wangzhihao
 * @param {Object} _props React属性
 * @returns {JSXElement} React元素组件
 * @exports module:QueryArticleWithReducerHook
 */
export default function QueryArticleWithReducerHook(_props) {
  const [query, setQuery] = useState("");
  const [{ isError, isLoading, data }, setUrl] = useDataApiWithReducer();
  return (
    <div className="query-article">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
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
