let tableData = {
  fatherCpn: {
    renderTimes: 0,
    updateTimes: 0,
  },
  leftCpn: {
    renderTimes: 0,
    updateTimes: 0,
  },
  rightCpn: {
    renderTimes: 0,
    updateTimes: 0,
  },
};
/**
 * @description 避免调停的方式：1.通过shouldComponnetUpdate提前结束render。2.React的虚拟DOM对比机制
 * @function C1
 * @returns {object} jsx元素
 */
class C1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftCpnProps: "leftCpnProps",
      rightCpnProps: "rightCpnProps",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidUpdate() {
    tableData.fatherCpn.updateTimes++;
  }
  handleClick() {
    this.setState({
      rightCpnProps: "rightCpnPropsChange",
    });
  }
  render() {
    tableData.fatherCpn.renderTimes++;
    return (
      <React.Fragment>
        <div style={{ position: "absolute", top: "16px" }}>fathercpn</div>
        <div
          style={{
            height: 400,
            width: 800,
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <LeftCpn left={this.state.leftCpnProps} />
          <RightCpn right={this.state.rightCpnProps} />
        </div>
        <div>
          <button onClick={this.handleClick}>change props</button>
        </div>
        <Table tableData={tableData} />
      </React.Fragment>
    );
  }
}
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.tableData = this.props.tableData;
  }
  render() {
    console.log(this.tableData);
    console.log(this.tableData.rightCpn.updateTimes);
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>fatherCpn</th>
            <th>leftCpn</th>
            <th>rightCpn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>渲染次数</th>
            <td>{this.tableData && this.tableData.fatherCpn.renderTimes}</td>
            <td>{this.tableData && this.tableData.leftCpn.renderTimes}</td>
            <td>{this.tableData && this.tableData.rightCpn.renderTimes}</td>
          </tr>
          <tr>
            <th>更新次数</th>
            <td>{this.tableData.fatherCpn.updateTimes}</td>
            <td>{this.tableData.leftCpn.updateTimes}</td>
            <td>{this.tableData.rightCpn.updateTimes}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
class LeftCpn extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    tableData.leftCpn.updateTimes++;
  }
  render() {
    console.log("child render");
    tableData.leftCpn.renderTimes++;
    return (
      <div style={{ height: 300, width: 300, border: "1px solid blue" }}>
        LeftCpn
      </div>
    );
  }
}

class RightCpn extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    tableData.rightCpn.updateTimes++;
  }
  render() {
    console.log("child render");
    tableData.rightCpn.renderTimes++;
    return (
      <div style={{ height: 300, width: 300, border: "1px solid blue" }}>
        RightCpn <br />
        {this.props.right}
      </div>
    );
  }
}
ReactDOM.render(<C1 />, document.querySelector("#root"));

function Son() {
  console.log("child render!");
  return <div>Son</div>;
}

function Parent(props) {
  const [count, setCount] = React.useState(0);

  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
    >
      count:{count}
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Parent>
      <Son />
    </Parent>
  );
}
ReactDOM.render(<App />, document.querySelector("#root2"));
