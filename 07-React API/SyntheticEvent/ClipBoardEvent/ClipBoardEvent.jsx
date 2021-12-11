/**
 * @description 剪贴板事件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-10 16:18:18
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
      value: "复制或剪切该文本",
      copy: "",
      paste: "",
      src: "",
    };
  }
  handleCopy(e) {
    console.log(e);
    this.setState({
      copy: e.target.value,
    });
  }
  handlePaste(e) {
    let data = null;
    console.log(e);
    console.log(e.clipboardData);
    console.log(e.clipboardData.types);
    console.log(e.clipboardData.files);
    console.log(e.clipboardData.items);
    if (e.clipboardData.types[0] === "text/plain") {
      data = e.clipboardData.getData("text");
    }
    if (e.clipboardData.types[0] === "Files") {
      data = e.clipboardData.files;
      if (data[0].type === "") {
        alert("不能复制文件");
      }
      if (data[0].type.includes("image")) {
        data = e.clipboardData.files[0];
        const render = new FileReader();
        render.onload = (e) => {
          // 输出base64编码
          const base64 = e.target.result;
          this.setState({ src: base64 });
        };
        render.readAsDataURL(data);
      }
    }

    this.setState({
      paste: e.clipboardData.getData("text"),
    });
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.Fragment>
        <h2>剪贴板事件 onCopy onCut onPaste </h2>
        <antd.Input
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          onCopy={this.handleCopy.bind(this)}
          onCut={this.handleCopy.bind(this)}
          style={{ width: "200px" }}
        />
        <br />
        <antd.Card
          style={{ width: "200px", border: "1px solid #69c0ff" }}
          title="复制的内容"
        >
          <p>{this.state.copy}</p>
        </antd.Card>
        <antd.Divider />
        <antd.Input
          defaultValue=""
          style={{ width: "200px" }}
          onPaste={(e) => this.handlePaste.bind(this, e)(e)}
        />

        <antd.Card
          style={{ width: "200px", border: "1px solid #69c0ff" }}
          title="粘贴的内容"
        >
          <p>{this.state.paste}</p>
          {this.state.src ? (
            <img src={this.state.src} alt="粘贴板的图片" />
          ) : null}
        </antd.Card>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
