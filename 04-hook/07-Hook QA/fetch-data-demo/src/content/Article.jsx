/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Article() {
  const [data, setdata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getReduxArticle().then();
  }, []);
  const getReduxArticle = async () => {
    setIsLoading(true);
    const result = await axios(
      "https://hn.algolia.com/api/v1/search?query=redux"
    );
    setdata(result.data);
    setIsLoading(false);
    console.log(result);
  };
  return (
    <div>
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
