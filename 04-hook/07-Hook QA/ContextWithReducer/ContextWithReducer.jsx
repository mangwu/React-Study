const { useReducer, useContext, useState } = window.React;
const todosContext = React.createContext(null);

const bookData = [
  {
    id: "1",
    book_name: "testx",
    author: "mangwu",
  },
  {
    id: "2",
    book_name: "eacas",
    author: "mangwu",
  },
];
const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.payload);
    case "DELETE":
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    default:
      return state;
  }
};
/**
 * @description 通过reducer hook和context 做到传递回调.避免层层传递，以及传递回调后组件的更新问题
 * @function ContextWithReducerExp
 * @returns {object} jsx元素
 */
function ContextWithReducerExp() {
  const [books, dispatch] = useReducer(bookReducer, bookData);
  const deleteBook = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  console.log(books);
  const tableData = books.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.book_name}</td>
        <td>{item.author}</td>
        <td>
          <button onClick={() => deleteBook(item.id)}>删除</button>
        </td>
      </tr>
    );
  });
  return (
    <todosContext.Provider value={dispatch}>
      <div>
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>书名</th>
              <th>作者</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
        <Form />
      </div>
    </todosContext.Provider>
  );
}
/**
 * @description 添加书籍的表单，通过父组件的dispatch来操作
 * @function Form
 * @returns {object} jsx元素
 */
function Form() {
  const dispatch = useContext(todosContext);
  // console.log(context);
  const [id, setId] = useState("");
  const [book_name, setBook_name] = useState("");
  const [book_author, setBook_author] = useState("");
  const submit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        id,
        book_name,
        book_author,
      },
    });
  };
  return (
    <form onSubmit={submit}>
      <label htmlFor="id">id</label>
      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <label htmlFor="book_name">书名</label>
      <input
        type="text"
        id="book_name"
        value={book_name}
        onChange={(e) => setBook_name(e.target.value)}
      />
      <br />
      <label htmlFor="book_author">作者</label>
      <input
        type="text"
        id="book_author"
        value={book_author}
        onChange={(e) => setBook_author(e.target.value)}
      />
      <br />
      <button type="submit">提交</button>
    </form>
  );
}
ReactDOM.render(<ContextWithReducerExp />, document.querySelector("#root"));
