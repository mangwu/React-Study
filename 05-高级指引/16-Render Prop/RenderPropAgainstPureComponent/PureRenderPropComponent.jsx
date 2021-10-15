/**
 * @description render prop组件传递函数为prop，每次渲染都会重新更新
 * 天然的与PureComponent对抗，抵消了其优势
 * 在使用render prop组件的
 */
class Mouse extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  }
  render() {
    return ReactDOM.createPortal(
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "100",
        }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state.x, this.state.y)}
      </div>,
      document.querySelector("#modal")
    );
  }
}
class Children extends React.PureComponent {
  render() {
    return (
      <img
        src="../gitlab_logo.png"
        alt="gitlabLogo"
        style={{
          position: "fixed",
          left: this.props.x,
          top: this.props.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  }
}
// 将渲染函数提取出来，不直接传给Mouse组件就可以使用PureComponent了
class MouseTracker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderChilren = this.renderChilren.bind(this);
  }
  renderChilren(x, y) {
    return <Children x={x} y={y} />;
  }
  render() {
    return <Mouse render={this.renderChilren} />;
  }
}
ReactDOM.render(<MouseTracker />, document.querySelector("#root"));
