/**
 * @description 文件输入表单元素只能是非受控组件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-25 15:26:43
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
const { useRef, useState } = window.React;
/**
 * @description 文件输入表单元素
 * @function FileInputApp
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function FileInputApp(_props) {
  // 文件ref
  const inputRef = useRef();
  // 文件信息
  const [fileInfo, setFileInfo] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFileInfo(inputRef.current.files[0]);
    console.log(inputRef.current.files[0]);
  };
  const file = fileInfo ? (
    <ul>
      <li>文件名：{fileInfo.name}</li>
      <li>文件大小: {fileInfo.size}</li>
      <li>文件类型: {fileInfo.type}</li>
      <li>文件最后一次修改时间： {fileInfo.lastModifiedDate.toString()}</li>
    </ul>
  ) : null;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-input"></label>
        <input type="file" id="file-input" ref={inputRef} />
        <button type="submit">提交</button>
      </form>
      <div>文件信息:</div>
      {file}
    </div>
  );
}
ReactDOM.render(<FileInputApp />, document.querySelector("#root"));
