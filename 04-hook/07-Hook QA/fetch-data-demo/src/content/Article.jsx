/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Article() {
  const [data, setdata] = useState(null);
  
  useEffect(() => {
    getReduxArticle().then();
  }, []);
  const getReduxArticle = async () => {
    const result = await axios(
      "https://hn.algolia.com/api/v1/search?query=redux"
    );
    setdata(result.data);
    console.log(result);
  };
  return (
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
  );
}
