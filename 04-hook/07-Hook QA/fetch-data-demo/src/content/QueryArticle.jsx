import { useState, useEffect } from "react";
import axios from "axios";
import "./QueryArticle.css";
/**
 * @description 如何使用Hooks获取数据的demo项目--检索文章组件
 * @version 1.0
 * @module QueryArticle
 * @author wangzhihao
 * @param {Object} _props
 * @returns {JSXElement}
 * @exports module:QueryArticle
 */
export default function QueryArticle(_props) {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  // const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (url) {
      searchArticle(url).then();
    } else {
      setData(null);
    }
  }, [url]);
  /**
   * @description 异步获取第三方API数据 https://hn.algolia.com/api
   * @async
   * @param {string} url 第三方API地址
   * @returns void
   */
  const searchArticle = async (url) => {
    setIsError(false);
    setIsLoading(true);
    // 获取数据时可能引发错误
    try {
      const results = await axios(url);
      setData(results.data);
      console.log(results);
    } catch (e) {
      setIsError(true);
    }

    setIsLoading(false);
  };
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
