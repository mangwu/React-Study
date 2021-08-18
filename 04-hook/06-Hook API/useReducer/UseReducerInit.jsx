const { useState, useReducer } = window.React;
const initialArg = [
  {
    typeName: "eDevice",
    type: "电子设备",
    eDeviceId: "ekb",
    eDeviceName: "Ipad Pro",
    eDeviceCompany: "apple",
  },
  {
    typeName: "books",
    type: "书本",
    bookId: "book1",
    bookName: "深入理解JS特性",
    bookAuthor: "Nicolás Bevacqua",
  },
  {
    typeName: "books",
    type: "书本",
    bookId: "book2",
    bookName: "红宝书",
    bookAuthor: "ICK",
  },
];
function init(initialArg) {
  const initialState = new Object();
  let storageInitialId = -1;
  for (let i = 0; i < initialArg.length; i++) {
    const typeName = initialArg[i].typeName;
    if (!initialState[typeName]) {
      const storageId = ++storageInitialId;
      initialState[typeName] = {
        storageId,
        storageName: initialArg[i].type,
        number: 1,
        [typeName]: [
          {
            ...initialArg[i],
          },
        ],
      };
      delete initialState[typeName][typeName][0].typeName;
      delete initialState[typeName][typeName][0].type;
    } else {
      const typeArray = initialState[typeName][typeName];
      initialState[typeName] = {
        ...initialState[typeName],
        number: typeArray.length + 1,
        [typeName]: typeArray.concat({ ...initialArg[i] }),
      };
      delete initialState[typeName][typeName][typeArray.length].typeName;
      delete initialState[typeName][typeName][typeArray.length].type;
    }
  }
  return initialState;
}
const initialState = {
  eDevice: {
    storageId: "0",
    storageName: "电子设备",
    number: 1,
    eDevice: [
      {
        eDeviceId: "ekb",
        eDeviceName: "Ipad Pro",
        eDeviceCompany: "apple",
      },
    ],
  },
  books: {
    storageId: "1",
    storageName: "书本",
    number: 1,
    books: [
      {
        bookId: "book1",
        bookName: "深入理解JS特性",
        bookAuthor: "Nicolás Bevacqua",
      },
    ],
  },
};

function storageReducer(state, action) {
  switch (action.type) {
    // book
    case "addBook":
      const book = action.payload;
      return {
        ...state,
        books: {
          ...state.books,
          books: state.books.books.concat(book),
          number: state.books.number + 1,
        },
      };
    case "addEDevice":
      const eDevice = action.payload;
      return {
        ...state,
        eDevice: {
          ...state.eDevice,
          eDevice: state.eDevice.eDevice.concat(eDevice),
          number: state.eDevice.number + 1,
        },
      };
    case "reset":
      return init(action.payload);
    default:
      return state;
  }
}
function StorageTable() {
  const [state, dispatch] = useReducer(storageReducer, initialArg, init);
  const [style, setStyle] = useState({
    border: "1px solid black",
    padding: "2px",
  });
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [radio, setRadio] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  };
  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    const type = radio;
    const payload =
      type === "addBook"
        ? { bookId: id, bookName: name, bookAuthor: owner }
        : { eDeviceId: id, eDeviceName: name, eDeviceCompany: owner };
    dispatch({
      type,
      payload,
    });
  };
  const reset = () => {
    dispatch({
      type: "reset",
      payload: initialArg,
    });
  };
  const eDeviceTable = Array(state.eDevice.number)
    .fill("eDevice")
    .map((v, index) => {
      const eDevice = state.eDevice.eDevice[index];
      return (
        <tr key={v + index} style={style}>
          <td style={style}>{eDevice.eDeviceId}</td>
          <td style={style}>{eDevice.eDeviceName}</td>
          <td style={style}>{eDevice.eDeviceCompany}</td>
        </tr>
      );
    });
  const booksTable = Array(state.books.number)
    .fill("books")
    .map((v, index) => {
      const book = state.books.books[index];
      return (
        <tr key={v + index} style={style}>
          <td style={style}>{book.bookId}</td>
          <td style={style}>{book.bookName}</td>
          <td style={style}>{book.bookAuthor}</td>
        </tr>
      );
    });
  return (
    <div>
      <h2>My Storage</h2>
      <table style={{ ...style, borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={style}>Materials ID</th>
            <th style={style}>Name</th>
            <th style={style}>Author / Company</th>
          </tr>
        </thead>
        <tbody>
          {booksTable}
          {eDeviceTable}
        </tbody>
      </table>
      <form onSubmit={addItem}>
        <label htmlFor="book">book</label>
        <input
          type="radio"
          id="book"
          onChange={handleRadioChange}
          value="addBook"
          name="add"
        />
        <br />
        <label htmlFor="e-device">e-device</label>
        <input
          type="radio"
          id="e-device"
          onChange={handleRadioChange}
          value="addEDevice"
          name="add"
        />
        <br />
        <label htmlFor="id">ID</label>
        <input type="text" value={id} id="id" onChange={handleIdChange} />
        <br />
        <label htmlFor="name">Name</label>
        <input type="text" value={name} id="name" onChange={handleNameChange} />
        <br />
        <label htmlFor="owner">Author / Company</label>
        <input
          type="text"
          value={owner}
          id="owner"
          onChange={handleOwnerChange}
        />
        <input type="submit" value="添加" />
      </form>
      <button type="reset" onClick={reset}>
        重置
      </button>
    </div>
  );
}
ReactDOM.render(<StorageTable />, document.querySelector("#root"));
