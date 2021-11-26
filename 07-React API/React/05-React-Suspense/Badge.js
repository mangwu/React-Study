/**
 * @description Badge
 * @class Badge
 * @extends React.PureComponent
 */
 class Badge extends React.PureComponent {
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    console.log(this.props.children);
    const node = React.Children.only(this.props.children);
    const count = this.props.count;
    const msgCount = count ? (count >= 99 ? "99+" : count) : 0;
    return React.createElement("span", { className: "badge" }, [
      React.cloneElement(node, {
        className: node.props.className + " sub",
        key: 0,
      }),
      React.createElement("sup", { className: "badge-count", key: "1" }, msgCount),
    ]);
  }
}
export { Badge as default };
