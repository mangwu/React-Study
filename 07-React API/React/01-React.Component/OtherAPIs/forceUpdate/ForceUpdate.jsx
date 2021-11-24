/**
 * @description 强制更新：当render中有外部的数据源时使用
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-24 10:54:04
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description 外部数据源
 * @type {Array} ItemList
 */
const ItemList = [
  {
    id: 0,
    text: "迪奥、陈漫为「丑化中国女性」争议道歉，你能接受吗？未来该怎么杜绝此类事件发生？",
  },
];
/**
 * @description 生成一个随机汉字
 * @function getRandomChineseWord
 * @returns {string} rsl 随机汉字
 */
function getRandomChineseWord() {
  let rsl = "";
  let randomUniCode = Math.floor(
    Math.random() * (40870 - 19968) + 19968
  ).toString(16);
  eval("rsl=" + '"\\u' + randomUniCode + '"');
  return rsl;
}
/**
 * @description 改动外部数据源
 * @function modifierItemList
 * @param {Array} list
 * @returns void
 */
function modifierItemList(list) {
  let random30 = Math.floor(Math.random() * 50 + 1);
  let text = "";
  for (let i = 0; i < random30; i++) {
    const rsl = getRandomChineseWord();
    text = text + rsl;
  }
  const newItem = {
    id: list.length,
    text,
  };
  ItemList.push(newItem);
}

setInterval(() => {
  modifierItemList(ItemList);
}, 5000);
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
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.Fragment>
        <h2>强制更新：当render中有外部的数据源时使用</h2>
        <button onClick={() => this.forceUpdate()}>强制更新</button>
        <ul>
          {this.props.list.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
        
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App list={ItemList} />, document.querySelector("#root"));
