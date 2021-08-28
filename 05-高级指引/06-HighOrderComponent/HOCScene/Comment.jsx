function Comment(props) {
  const username = props.comment.username;
  const content = props.comment.content;
  const avaterUrl = props.comment.avaterUrl;
  return (
    <div
      style={{
        padding: "5px 4px",
        borderBottom: "1px solid gray",
        width: "100%",
      }}
    >
      <div
        className="user-info"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <div>
          <img
            src={avaterUrl}
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
          <div>
            {username}
          </div>
        </div>
      </div>
      <div>
        {content}
      </div>
    </div>
  );
}
