/**
 * Refs转发的使用方式
 */
const { createRef, forwardRef } = window.React;

const fancyButtonRef = React.createRef();
const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button className="fancy-button" ref={ref}>
      {props.children}
    </button>
  );
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.showFbref = this.showFbref.bind(this);
  }
  componentDidMount() {
    fancyButtonRef.current.addEventListener("click", () => {
      this.setState((state) => ({
        count: state.count + 1,
      }));
    });
  }
  showFbref() {
    console.log(fancyButtonRef.current.className);
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <FancyButton ref={fancyButtonRef}>Click me</FancyButton>
        <button onClick={this.showFbref}>show fancybuttonRef</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
