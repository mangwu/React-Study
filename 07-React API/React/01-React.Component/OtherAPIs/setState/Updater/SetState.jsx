/**
 * @description component的其他API：setState;探讨关于updater的使用
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-22 15:52:21
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description App
 * @class App
 * @extends React.PureComponent
 */
class App extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.addTwiceTimeInFormOfObject =
      this.addTwiceTimeInFormOfObject.bind(this);
    this.addTwiceTimeInFormOfUpdater =
      this.addTwiceTimeInFormOfUpdater.bind(this);
  }
  /**
   * @method addTwiceTimeInFormOfObject
   * @returns void
   */
  addTwiceTimeInFormOfObject() {
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  /**
   * @description 使用带有形式参数的updater函数更新state
   * @method addTwiceTimeInFormOfUpdater
   * @returns void
   */
  addTwiceTimeInFormOfUpdater() {
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <h2>component的其他API：setState;探讨关于updater的使用</h2>
        <fieldset>
          <h3>使用普通的对象更新state</h3>
          <div>counter: {this.state.counter}</div>
          <button onClick={this.addTwiceTimeInFormOfObject}>
            add in form of object
          </button>
        </fieldset>
        <fieldset>
          <h3>使用带有形式参数的updater函数更新state</h3>
          <div>counter: {this.state.counter}</div>
          <button onClick={this.addTwiceTimeInFormOfUpdater}>
            add in form of updater
          </button>
        </fieldset>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
