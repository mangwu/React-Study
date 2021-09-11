import { useState, useEffect, useReducer } from "react";
import axios from "axios";

/**
 * @description reducer函数 接收当前的state和触发的动作action 返回最新的状态，reducer是业务的一部分
 * @function dataReducer
 * @param {Object} state 状态
 * @param {Object} action 行为动作
 * @returns {Object} state 最新状态
 */
const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    // eslint-disable-next-line no-fallthrough
    default:
      state = {
        ...state,
      };
  }
};

/**
 * @description 自定义Hook，用于管理获取第三方数据时的状态 使用reducer代替state管理状态
 * @module useDataApiWithReducer
 * @author wangzhihao
 * @returns {Object} state
 * @exports module:useDataApiWithReducer
 */
export default function useDataApiWithReducer() {
  const [url, setUrl] = useState("");
  const [state, dispatch] = useReducer(dataReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });
  const getHackerNewsArticle = async (url) => {
    dispatch({ type: "FETCH_INIT" });
    try {
      const results = await axios(url);
      dispatch({ type: "FETCH_SUCCESS", payload: results.data });
    } catch (e) {
      dispatch({ type: "FETCH_FAILURE" });
    }
  };
  useEffect(() => {
    if (url) {
      getHackerNewsArticle(url).then();
    }
  }, [url]);
  const { isLoading, isError, data } = state;
  return [{ isLoading, isError, data }, setUrl];
}
