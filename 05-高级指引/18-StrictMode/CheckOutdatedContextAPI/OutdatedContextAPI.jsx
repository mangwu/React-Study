/**
 * @description 严格模式检查过时的ContextAPI
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-21 09:41:43
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description 通过过时Context获取color属性的组件
 * @class Button
 * @extends React.Component
 */
class Button extends React.Component {
  render() {
    return (
      <button
        style={{ background: this.context.color, color: "#fff" }}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

/**
 * @type {{color: string}} Button.contextTypes - 消费者
 */
Button.contextTypes = {
  color: PropTypes.string,
};

/**
 * @description 中间组件
 * @class Message
 * @extends React.Component
 */
class Message extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.deleteMessage = this.deleteMessage.bind(this);
  }
  deleteMessage(id) {
    let newMessages = messages.filter((item) => {
      return item.id !== id;
    });
    messages = newMessages;
    console.log(messages);
  }
  render() {
    return (
      <div>
        {this.props.message.text}
        <Button onClick={() => this.deleteMessage(this.props.message.id)}>
          Delete
        </Button>
      </div>
    );
  }
}
/**
 * @description 父组件
 * @class MessageList
 * @extends React.Component
 */
class MessageList extends React.Component {
  getChildContext() {
    return { color: "purple" };
  }

  render() {
    const children = this.props.messages.map((message) => (
      <Message message={message} key={message.id} />
    ));
    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string,
};
let messages = [
  {
    text: "message1",
    id: 1,
  },
  {
    text: "message2",
    id: 2,
  },
  {
    text: "message3",
    id: 3,
  },
];
// 严格模式检查非法过时的Context API
ReactDOM.render(
  <React.StrictMode>
    <MessageList messages={messages} />
  </React.StrictMode>,
  document.querySelector("#root")
);
