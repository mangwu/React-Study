/**
 * @description 使用派生state作为Memoization存储props的缓存计算出的数据：一种不推荐的方案
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-09 19:33:25
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description App
 * @class App
 * @extends React.Component
 */
class App extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void 
   */
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          id: 0,
          text: "日媒发文反省为何日本国宝级科学家流向中国，如何看待这一现象？",
          description: "日本“国宝级”科学家、国际上被誉为“光催化之父”的藤岛昭前不久率研究团队加盟上海理工大学。消息一出，就引起日本新一轮人才外流恐慌。日媒7日发文反省“为什么日本的‘超级大脑’流向中国”。文章讲述了67岁的北海道大学名誉教授上田多门的故事。"
        },
        {
          id: 1,
          text: "如何看待丁香医生《谢谢你抽电子烟：一场瞄准年轻人的健康骗局》一文？",
          description: "丁香医生10w+文章炮轰电子烟，数据是否可靠？电子烟到底是不是瞄准年轻人的骗局？"
        }
      ],
      text: "",
      description: "",
    }
    this.addListItem = this.addListItem.bind(this);
  }
  /**
   * @method addListItem
   */
  addListItem() {
    this.setState((preState) => {
      return {
        lists: [
          ...preState.lists,
          {
            id: preState.length,
            text: preState.text,
            description: preState.description,
          }
        ]
      }
    })
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div></div>
    ) 
  }
}