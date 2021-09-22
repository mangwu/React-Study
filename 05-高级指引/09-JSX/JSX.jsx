/**
 * @description 深入JSX，有关JSX使用的特性
 */

/**
 * @description 使用点语法指定JSX标签的第一部分（React元素类型）
 * @function UseDotSyntax
 * @returns {object} jsx元素
 */
const MyComponet = {
  DatePicker: function DatePicker({ color }) {
    return <div>This is a {color} datepicker component.</div>;
  },
};
function UseDotSyntax() {
  return <MyComponet.DatePicker color="green" />;
}
ReactDOM.render(<UseDotSyntax />, document.querySelector("#root"));
/**
 * @description 除了点语法，通用表达式不能在JSX标签元素中指定React元素类型，需要提前声明好React元素
 * @function ForwardDeclarations
 * @returns {object} jsx元素
 */
const MoodComponent = {
  happy: function HappyState({ content }) {
    return <div>happy: {content}</div>;
  },
  bad: function BadState({ content }) {
    return <div>bad: {content}</div>;
  },
};
function ForwardDeclaration({ type, content }) {
  // 提前声明
  const SpecialMood = MoodComponent[type];
  return <SpecialMood content={content} />;
}
ReactDOM.render(
  <ForwardDeclaration content="I am happy" type="happy" />,
  document.querySelector("#root2")
);

/**
 * @description 字符串字面量赋值的两种方法
 * @function StringProps
 * @returns {object} jsx元素
 */
function StringProps({ message1, message2 }) {
  return (
    <div>
      <h3>字面量赋值</h3>
      <div>直接通过字符串引号赋值需要手动转义: {message1}</div>
      <div>
        通过{"{}"}赋值不需要转义：{message2}
      </div>
    </div>
  );
}
ReactDOM.render(
  <StringProps message1="<hello world>" message2={'&lt;hello world>'} />,
  document.querySelector("#root3")
);
