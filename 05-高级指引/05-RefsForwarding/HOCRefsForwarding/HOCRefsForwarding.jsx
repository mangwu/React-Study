/**
 * 结合高阶组件使用refs转发，获取高阶组件中的原始组件的ref
 * ref传递：TextInputWithLogProps -> WithLogProps -> WrappedComponent(TextInput) -> input[text]  
 */
const inputRef = React.createRef();

// class TextInput extends React.Component {
//   render() {
//     return (
//       <div>
//         <input type="text" name="text" id="text" ref={forwardedRef} />
//       </div>
//     );
//   }
// }
const TextInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" name="text" id="text" ref={ref} {...props} />
    </div>
  );
});
TextInput.displayName =  "TextInput"
function withLogProps(WrappedComponent) {
  class WithLogProps extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidUpdate(prevProps) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }
    render() {
      // 获取从高阶组件中传递来的
      const { forwardedRef, ...rest } = this.props;
      // 通过替代属性传递ref
      return <WrappedComponent {...rest} ref={forwardedRef} />;
    }
  }
  const WithLogPropsForwardRef = React.forwardRef((props, ref) => {
    return <WithLogProps {...props} forwardedRef={ref} />;
  });
  const name = WrappedComponent.displayName || WrappedComponent.name;
  WithLogPropsForwardRef.displayName = `WithLogProps${name}`;
  return WithLogPropsForwardRef;
}

const TextInputWithLogProps = withLogProps(TextInput);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log(inputRef.current);
  }
  handleClick() {
    inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <TextInputWithLogProps ref={inputRef} />
        <button onClick={this.handleClick}>focus</button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
