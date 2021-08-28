
const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};
const set = new Set();
let commentData = [
  {
    username: "mangwu",
    avaterUrl: "https://github.githubassets.com/pinned-octocat.svg",
    content: `
    comment1
    关于emoji能否显示的问题:😀
  `,
  },
  {
    username: "wumang",
    avaterUrl: "https://github.githubassets.com/pinned-octocat.svg",
    content: `
      comment2
      关于换号是否有用的问题：
      br
      br
    `,
  },
  {
    username: "wumang",
    avaterUrl: "https://github.githubassets.com/pinned-octocat.svg",
    content: `
      comment3
      br\n
      br
    `,
  },
];
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: commentData,
    };
    this.buttonRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }
  // 订阅更改
  componentDidMount() {
    const node = this.buttonRef.current;
    node.addEventListener("click", this.handleChange);
  }
  handleChange() {
    shuffle(commentData);
    this.setState({
      comments: commentData,
    });
  }
  // 清除订阅
  componentWillUnmount() {
    const node = this.buttonRef.current;
    node.removeEventListener("click", this.handleChange);
  }
  render() {
    const commentsEle = this.state.comments.map((comment, index) => {
      return <Comment comment={comment} key={index} />;
    });
    return (
      <div>
        {commentsEle}
        <button ref={this.buttonRef}>click me</button>
      </div>
    );
  }
}

ReactDOM.render(<CommentList />, document.querySelector("#root"));
