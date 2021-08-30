function Post(props) {
  const postTitle = props.post.title;
  const postAuthor = props.post.author;
  const postContent = props.post.content;
  const postTime = props.post.time;
  return (
    <div>
      <h2>{postTitle}</h2>
      <div style={{textAlign: "right"}}>
        {postAuthor}
      </div>
      <div style={{textAlign: "right"}}>
        {postTime}
      </div>
      <div style={{fontSize: "20px"}}>
        {postContent}
      </div>
    </div>
  )
}