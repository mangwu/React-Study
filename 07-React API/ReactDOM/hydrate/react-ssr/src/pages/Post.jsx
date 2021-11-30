import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  /**
   * @description 模拟数据获取
   * @method componentDidMount
   * @returns void
   */
  componentDidMount() {
    setTimeout(() => {
      this.setState((state) => {
        return {
          posts: [
            ...state.posts,
            {
              title:
                '如何看待《2021中国城市租住生活蓝皮书》称10年内超2亿国人要租房？',
              content:
                '租户对住房质量的要求也进一步提高……关于这份蓝皮书，大家有什么看法吗？面对目前的租赁市场，我们该怎么去合理的去租房？或者租房产业还有什么机遇或者趋势吗？',
              id: state.posts.length,
              author: 'mangwu',
              url: 'https://github.com/mangwu',
            },
          ],
        };
      });
    });
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    const posts = this.state.posts;
    return (
      <div>
        <h1>Page Post</h1>
        <Link to="/">Link to Home</Link>
        {posts.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>By: {item.author}</p>
              <p>
                Link:
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  github
                </a>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
