/**
 * @description Home
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-02 17:26:18
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
import React, { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData";
import proxyWindow from "../helpers/window";
// import "./index.css";
/**
 * @description Home
 * @function Home
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function Home(props) {
  const [posts, setPosts] = useState([]);
  // if (proxyWindow && proxyWindow.__ROUTE_DATA__) {
  //   this.setState({
  //     post: proxyWindow.__ROUTE_DATA__,
  //   });
  //   console.log("删除data");
  //   delete proxyWindow.__ROUTE_DATA__;
  // } else {
  //   fetchData().then((data) => {
  //     console.log(data);
  //     setPosts(data);
  //   });
  // }
  // ssr渲染不会指向首次的渲染 didMount
  useEffect(() => {
    // 模拟数据获取
    if (proxyWindow && proxyWindow.__ROUTE_DATA__) {
      this.setState({
        post: proxyWindow.__ROUTE_DATA__,
      });
      console.log("删除data");
      delete proxyWindow.__ROUTE_DATA__;
    } else {
      fetchData().then((data) => {
        console.log(data);
        setPosts(data);
      });
    }
    // setTimeout(() => {
    //   setPosts([
    //     {
    //       title: "2021年为什么经济在恢复，我却越来越焦虑？",
    //       id: 0,
    //       author: "mangwu",
    //       url: "https://www.zhihu.com/question/451778275",
    //     },
    //   ]);
    // }, 2000);
  }, []);
  return (
    <React.Fragment>
      <h2>Home</h2>
      <ul className="description">
        <li>作者：{props.author}</li>
        <li>邮箱：{props.email}</li>
      </ul>
      <hr />
      <ul>
        {posts.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url} target="_blank">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
export default Home;
