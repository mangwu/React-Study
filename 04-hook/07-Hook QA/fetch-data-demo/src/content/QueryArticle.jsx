import { useState, useEffect } from "react";
import axios from "axios";
import "./QueryArticle.css";
export default function QueryArticle() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  // const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (url) {
      searchArticle(url).then();
    } else {
      setData(null);
    }
  }, [url]);
  const searchArticle = async (url) => {
    setIsLoading(true);
    const results = await axios(url);
    setData(results.data);
    setIsLoading(false);
    console.log(results);
  };
  const handleQueryInputChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  return (
    <div className="query-article">
      <div>
        <input type="search" value={query} onChange={handleQueryInputChange} />
        <button
          disabled={query ? false : true}
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          search
        </button>
      </div>
      {isLoading ? (
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
