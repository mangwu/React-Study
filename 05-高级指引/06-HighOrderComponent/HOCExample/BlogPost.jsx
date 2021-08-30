function BlogPost(props) {
  const postsEle = props.data.map((post, index) => {
    return <Post post={post} key={index} />;
  });
  return <div>{postsEle}</div>;
}
// 通过高阶组件获取订阅逻辑
const WithSubscribeBlogPost = withSubscribe(BlogPost, postsData);

ReactDOM.render(<WithSubscribeBlogPost />, document.querySelector("#root2"));


