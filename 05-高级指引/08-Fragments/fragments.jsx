const tableData = [
  {
    action: "Hello",
    payload: "World",
  },
  {
    action: "Hello",
    payload: "React",
  },
];
/**
 * @description 关于片段的基本使用，React中的片段用于在组件中返回一个元素列表而不是一个只能由单标签包裹的JSX元素
 * @function Table
 * @param {object} props
 * @returns {object} JSX元素
 */
function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>action</th>
          <th>payload</th>
        </tr>
      </thead>
      <tbody>
        {props.tableData.map((item, i) => {
          return <Rows row={item} key={i} />;
        })}
      </tbody>
    </table>
  );
}

/**
 * @description 在Rows组件中使用返回单元格列表的组件Columns
 * @function Rows
 * @param {object} props.row 表格一行数据
 * @returns {object} JSX元素
 */
function Rows({ row }) {
  return (
    <tr>
      <Columns row={row} />
    </tr>
  );
}
/**
 * @description 在Columns组件中使用fragments返回元素列表
 * @function Columns
 * @param {object} props.row 表格的一行数据
 * @returns {object} 使用了fragment的jsx元素
 */
function Columns({ row }) {
  return (
    <React.Fragment>
      <td>{row.action}</td>
      <td>{row.payload}</td>
    </React.Fragment>
  );
}
ReactDOM.render(
  <Table tableData={tableData} />,
  document.querySelector("#root")
);
