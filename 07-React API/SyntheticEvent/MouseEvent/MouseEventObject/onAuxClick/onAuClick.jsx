/*
 * Filename: d:\project\study\React-study\React-Study\07-React API\SyntheticEvent\MouseEvent\MouseEventObject\onAuxClick\onAuClick.jsx
 * Path: d:\project\study\React-study\React-Study\07-React API\SyntheticEvent\MouseEvent\MouseEventObject\onAuxClick
 * Created Date: Wednesday, January 12th 2022, 3:29:15 pm
 * Author: mangwu
 *
 * Copyright (c) 2022 Your Company
 */

// const randomNumber = (start, end) => {
//   // 返回[start, end - 1]// 均为整数
//   return Math.floor(Math.random() * (end - start)) + start;
// };
/**
 * @description App
 * @class App
 * @extends React.PureComponent
 */
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      backgroudColor: "#ffffff",
    };
  }
  // 返回随机
  randomColor() {
    return `rgb(${randomNumber(0, 256)}, ${randomNumber(
      0,
      256
    )}, ${randomNumber(0, 256)})`;
  }
  render() {
    return (
      <React.Fragment>
        <h2>React中的auxclick</h2>
        <div className="clickme">use different mouse key click me</div>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
