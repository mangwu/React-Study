import { useState, useEffect } from "react";
import axios from "axios";
/**
 * @description 自定义Hook 获取HackerNewsApi数据的逻辑 包括错误处理，等待加载，获取数据等
 * @function useHackerNewsApi
 * @author wangzhihao
 * @returns {Array} data isError isLoading setUrl
 * @exports module:useHackerNewsApi
 */

export default function useHackerNewsApi() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (url) {
      getHackerNewsArticle(url).then();
    } else {
      setData(null);
    }
  }, [url]);
  const getHackerNewsArticle = async (url) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const results = await axios(url);
      setData(results.data);
      console.log(results);
    } catch (e) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  return [data, isLoading, isError, setUrl];
}
