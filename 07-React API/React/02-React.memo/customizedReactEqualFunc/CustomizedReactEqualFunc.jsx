/**
 * 自定义比较函数
 * 在React.memo高阶函数中，可以自定义是否更新的比较函数，而不是简单的检查props的浅层变化
 */

const { memo, useState, useRef, useEffect } = window.React;

function NormalCpn(props) {
  const times = useRef(1);
  useEffect(() => {
    times.current++;
  });
  console.log(`${props.type} was rendered.`);
  const list = props.data.list.map((v, i) => <li key={i}>{v}</li>);
  return (
    <div>
      <hr />
      <h3>{`${props.type} has been rendered ${times.current} times`}</h3>
      模拟数据变更检查
      <ol>{list}</ol>
    </div>
  );
}

// 自定义比较函数
const areEqual = (prevProps, nextProps) => {
  return prevProps.data.others === nextProps.data.others;
};

// 不是用自定义比较函数的进行包装的组件
const CpnWrappedMemoWithoutAreEqual = React.memo(NormalCpn);

// 使用自定义比较函数进行包装的组件
const CpnWrappedMemoWithAreEqual = React.memo(NormalCpn, areEqual);

const data = {
  others: "Component with areEqual 比较的属性",
  list: ["①", "②", "③", "④"],
};

const shuffle = function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
};

function App(props) {
  const [data, setData] = useState(props.data);
  const [fresh, setFresh] = useState(false);
  const handleDataChange = () => {
    const newList = shuffle(data.list);
    setData({
      ...data,
      list: newList,
    });
  };
  return (
    <div>
      <div className="update-father-cpn">
        <button onClick={() => setFresh(!fresh)}>刷新（父组件重新渲染）</button>{" "}
        <button onClick={handleDataChange}>
          传递进来props数据data数组list顺序打乱
        </button>
      </div>
      <div className="son-cpn">
        <NormalCpn type={"normalCpn"} data={data} />
        <CpnWrappedMemoWithoutAreEqual
          type={"Component wrapped by memo without comparision function"}
          data={data}
        />
        <CpnWrappedMemoWithAreEqual
          type={"Component wrapped by memo with comparision function"}
          data={data}
        />
      </div>
    </div>
  );
}
ReactDOM.render(<App data={data} />, document.querySelector("#root"));
