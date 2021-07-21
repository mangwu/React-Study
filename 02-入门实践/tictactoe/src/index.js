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
  // 状态提升到Game
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     square: Array(9).fill(null),
  //     // 井字旗的轮流落子
  //     xIsNext: true,
  //     winner: null,
  //   };
  // }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        // onClick={this.handleClick}
        key={i}
      />
    );
  }

  render() {
    const boards = Array(3).fill(0).map((value, index) => {
      const boardRow = Array(3).fill(0).map((value2, index2) => {
        // const s = this.renderSquare(index * 3 + index2);
        return (this.renderSquare(index * 3 + index2));
      });
      // console.log(boardRow);
      return <div className="board-row" key={index}>{boardRow}</div>;
    });
    // console.log(boards);
    return (
      <div>
        {/* 提升到Game组件中 <div className="status">{status}</div> */ boards}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      winner: null,
      stepNumber: 0,
      drops: [],
      chooseIndex: 0,
    };
  }
  handleClick(i) {
    // 胜负已经分？
    // if (this.state.winner) return;
    // 获取一个复制的新状态数组

    // 若有跳转，根据跳转后的跳转步数对原来的历史记录进行删除，然后“续写”记录
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history.length - 1;
    const squares = history[current].squares.slice();

    const drops = this.state.drops.slice(0, this.state.stepNumber + 1);

    // 判断此处是否落子
    if (!squares[i] && !this.state.winner) {
      this.state.xIsNext ? (squares[i] = "X") : (squares[i] = "O");
      const winner = caculateWinner(squares);
      this.setState({
        history: history.concat([
          {
            squares: squares,
          },
        ]),
        xIsNext: !this.state.xIsNext,
        winner: winner,
        stepNumber: history.length,
        drops: drops.concat([i]),
        chooseIndex: this.state.chooseIndex + 1,
      });
    }
  }
  jumpTo(step) {
    // 无意义跳转处理
    if (step === this.state.stepNumber) return;
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      // 重置winner
      winner: null,
      chooseIndex: step,
    });
  }
  render() {
    // 判断状态
    let status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    if (this.state.winner) {
      status = "The winner: " + this.state.winner;
    } else if (this.state.stepNumber === 9) {
      status = "No winner!";
    }
    // 获取当前旗局
    const current = this.state.stepNumber;
    const currentSquares = this.state.history[current];

    // 遍历history操作的元素，获取历史记录的React元素
    let moves = this.state.history.map((step, move) => {
      // step: 历史记录中的每一步，就是history状态的每个布局
      // move: 索引，可以表示要去的落子点

      // 根据索引判断每步的描述，第0步就是初始棋盘
      const desc = move ? "Go to move #" + move : "Go to Game start";
      const drop = move
        ? {
            row: parseInt(this.state.drops[move - 1] / 3) + 1,
            col: (this.state.drops[move - 1] % 3) + 1,
            status: move % 2 ? "X" : "O",
          }
        : {
            row: -1,
            col: -1,
            status: null,
          };

      // 返回每一个棋盘布局(一个React元素)
      return (
        <li
          key={move}
          className={move === this.state.chooseIndex ? "highlight" : "normal"}
        >
          <span>{move + 1 + ".  "}</span>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
          &nbsp;<span>坐标: {"(" + drop.row + ", " + drop.col + ")"}</span>
          <span> 落子: {drop.status} </span>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board // 传递当前局面和点击处理方法
            squares={currentSquares.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button 
            onClick={() => 
              {
                moves.reverse();
              }
            }
          >
            更改顺序
          </button>
          <ol className="step-list">{moves}</ol>
        </div>
      </div>
    );
  }
}
// 判断胜者
function caculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    // console.log(line)
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
