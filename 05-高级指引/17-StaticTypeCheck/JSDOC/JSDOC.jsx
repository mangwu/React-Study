/**
 * @description 使用JSDOC为JavaScript做静态类型检查
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-19 16:07:54
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description 使用JSDOC做类型检查
 * @class JSDOCStaticTypeCheck
 * @extends React.PureComponent
 */
class JSDOCStaticTypeCheck extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      info: "使用JSDoc进行代码静态类型检查",
    };
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <h2>{this.state.info}</h2>
      </div>
    );
  }
}

ReactDOM.render(<JSDOCStaticTypeCheck />, document.querySelector("#root"));


