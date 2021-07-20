import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }

//   render() {
//     return (
//       <button
//         className="square"
//         // 获取到父组件传递的onClick方法并执行
//         onClick={() => this.props.onClick()}
//         //onClick={() => this.props.onClick(this.props.key)}
//       >

//         {/* {this.state.value} 点击状态保存在父组件中，不再需要 */}
//         {this.props.value}
//       </button>
//     );
//   }
// }

// 函数组件
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square: Array(9).fill(null),
      // 井字旗的轮流落子
      xIsNext: true,
    };
  }
  handleClick(i) {
    // 获取一个复制的新状态数组
    const squares = this.state.square.slice();
    // 判断此处是否落子
    if (!squares[i]) {
      this.state.xIsNext ? (squares[i] = "X") : (squares[i] = "O");
      this.setState({
        square: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.square[i]}
        onClick={() => this.handleClick(i)}
        // onClick={this.handleClick}
        // key={i}
      />
    );
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
