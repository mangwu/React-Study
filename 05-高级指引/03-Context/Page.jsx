function Page(props) {
  const user = props.user;
  const content = <Feed user={user} />;
  // 组件组合，传递组件
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avater user={user} size={props.avaterSize} />
      </Link>
    </NavigationBar>
  );
  return <PageLayout topBar={topBar} content={content} />;
}

function PageLayout(props) {
  return (
    <div className="page-layout">
      <div className="top-bar">{props.topBar}</div>
      <div className="content">{props.content}</div>
    </div>
  );
}

function Feed(props) {
  return (
    <div className="feed-content">
      Hello, {props.user.name}. This is your home!.
    </div>
  );
}

function NavigationBar(props) {
  return <div className="navigation-bar">{props.children}</div>;
}

function Link(props) {
  return (
    <a href={props.href} target="_blank">
      {props.children}
    </a>
  );
}

function Avater(props) {
  return (
    <img
      src={props.user.url}
      alt="用户头像"
      width={avaterSize.width}
      height={avaterSize.height}
    />
  );
}

const user = {
  permalink: "https://www.zhihu.com/people/mang-wu-57-61",
  name: "mangwu",
  url: "https://pic4.zhimg.com/v2-942e727af7105da603cf5b323390c076_xl.jpg",
};

const avaterSize = {
  width: "280px",
  height: "280px",
};

ReactDOM.render(
  <Page user={user} avaterSize={avaterSize} />,
  document.querySelector("#root")
);
