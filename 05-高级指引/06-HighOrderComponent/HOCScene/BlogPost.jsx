
const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};
let postsData = [
  {
    title: "关于声卡是成本会计",
    author: "mangwu",
    time: new Date().toLocaleDateString(),
    content: `
    Post1
    关于emoji能否显示的问题:😀
  `,
  },
  {
    title: "乐卡车率哦分",
    author: "wumang",
    time: new Date().toLocaleDateString(),
    content: `
      Post2
      关于换号是否有用的问题：
      br
      br
    `,
  },
  {
    title: "拉萨芦荟茶撒个拉欧",
    author: "wumang",
    time: new Date().toLocaleDateString(),
    content: `
      Post3
      br\n
      br
    `,
  },
];
class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: postsData,
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
    shuffle(postsData);
    this.setState({
      posts: postsData,
    });
  }
  // 清除订阅
  componentWillUnmount() {
    const node = this.buttonRef.current;
    node.removeEventListener("click", this.handleChange);
  }
  render() {
    const postsEle = this.state.posts.map((post, index) => {
      return <Post post={post} key={index} />;
    });
    return (
      <div>
        {postsEle}
        <button ref={this.buttonRef}>click me</button>
      </div>
    );
  }
}

ReactDOM.render(<PostList />, document.querySelector("#root2"));
