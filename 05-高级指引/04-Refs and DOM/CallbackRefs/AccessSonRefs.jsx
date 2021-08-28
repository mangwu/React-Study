function CustomTextInput(props) {
  return (
    <div>
      <input type="text" ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = null;
    this.focusSonInput = this.focusSonInput.bind(this);
  }
  focusSonInput() {
    this.inputElement.focus();
  }
  render() {
    return (
      <div>
        <CustomTextInput inputRef={(ele) => (this.inputElement = ele)} />
        <button onClick={this.focusSonInput}>focus Son Component input</button>
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.querySelector("#root2"));
