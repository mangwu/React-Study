function CommentList(props) {
  const commentsEle = props.data.map((comment, index) => {
    return <Comment comment={comment} key={index} />;
  });
  return <div>{commentsEle}</div>;
}

const WithSubscribeCommentList = withSubscribe(CommentList, commentData);

ReactDOM.render(<WithSubscribeCommentList />, document.querySelector("#root"));
