/**
 * 将BlogPost和CommentList中的相同逻辑抽离到高阶组件中来
 * withSubscribe(WrappedComponent, selectData)
 * WraapedComponent是一个普通组件，selectData是一个数据获取函数
 */
const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};
function withSubscribe(WrappedComponent, Datasource) {
  // 返回另外一个组件
  class WithSubscribe extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.buttonRef = React.createRef();
      this.state = {
        data: Datasource,
      };
    }
    componentDidMount() {
      // 订阅
      this.buttonRef.current.addEventListener("click", this.handleChange);
    }
    componentWillUnmount() {
      // 清除订阅
      this.buttonRef.current.removeEventListener("click", this.handleChange);
    }
    // 变化
    handleChange() {
      shuffle(Datasource);
      this.setState({
        data: Datasource,
      });
    }
    // 渲染
    render() {
      // 使用新数据渲染包装的组件
      // 可能有其他传入组件的属性，使解构语法解构props
      return (
        <div>
          <WrappedComponent data={this.state.data} {...this.props} />
          <button ref={this.buttonRef}>Click</button>
        </div>
      );
    }
  }
  // 修改显示名称
  WithSubscribe.displayName =  `WithSubscribe(${WrappedComponent.name})`
  return WithSubscribe;
}

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
