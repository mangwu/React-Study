const { useState, useEffect, useCallback, useRef } = window.React;
/**
 * @description 关于Profiler API的使用 使用时钟表盘测量
 * @function BaseUse
 * @returns {object} jsx元素
 */

function BaseUse() {
  const [date, setDate] = useState(new Date());
  const [table, setTable] = useState([]);
  const interval = useRef();
  const tableRow = useRef();
  const [isStop, setIsStop] = useState(false);
  const handleStop = () => {
    setIsStop(!isStop);
    if (isStop) {
      setDate(new Date());
    }
  };
  const tick = useCallback(() => {
    setDate(new Date());
  }, []);
  useEffect(() => {
    if (!isStop) {
      interval.current = setInterval(() => {
        tick();
      }, 1000);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [isStop]);
  const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    const renderInfo = {
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    };
    console.log(renderInfo);
    tableRow.current = renderInfo;
  };
  useEffect(() => {
    setTable(table.concat(tableRow.current));
  }, [date]);

  return (
    <React.Fragment>
      <div>时钟表盘</div>
      <React.Profiler id="ClockDial" onRender={onRenderCallback}>
        <ClockDial date={date} />
      </React.Profiler>
      <div>{date.toLocaleString()}</div>
      <button onClick={handleStop}>{isStop ? "时间继续" : "时间暂停"}</button>
      <Table table={table} />
    </React.Fragment>
  );
}
/**
 * @description 表时钟渲染组件Profiler表格
 * @function Table
 * @param {object.Array} props.table 关于渲染时钟表盘组件渲染的表格数据
 */
function Table({ table }) {
  return (
    <table>
      <thead>
        <tr>
          <th>渲染组件</th>
          <th>渲染类型</th>
          <th>本次渲染花费时间</th>
          <th>最差的渲染时间</th>
          <th>开始渲染的时间</th>
          <th>提交时间</th>
          <th>交互数</th>
        </tr>
      </thead>
      <tbody>
        {table.map((v, i) => {
          return (
            <tr key={i}>
              <td>{v.id}</td>
              <td>{v.phase}</td>
              <td>{v.actualDuration}</td>
              <td>{v.baseDuration}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{v.interactions.size}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
/**
 * @description 时钟表盘
 * @function ClockDial
 * @returns {object} jsx元素
 */
function ClockDial({ date }) {
  useEffect(() => {
    // 获取canavs上下文
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // 绘制表盘
    // 设置画笔样式
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(300, 300, 200, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // a.绘制时刻度
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    for (let i = 0; i < 12; i++) {
      ctx.save();
      ctx.translate(300, 300);
      ctx.rotate((i * Math.PI) / 6);
      ctx.beginPath();
      ctx.moveTo(0, -180);
      ctx.lineTo(0, -200);
      ctx.closePath();
      ctx.stroke();

      // 绘制时间
      ctx.fillStyle = "black";
      ctx.font = "16px blod";
      ctx.rotate(Math.PI / 6);
      ctx.fillText(i + 1, -5, -165);
      ctx.restore();
    }
    // b.绘制分刻度
    for (let i = 0; i < 60; i++) {
      ctx.save();
      ctx.translate(300, 300);
      ctx.rotate((i * Math.PI) / 30);
      ctx.beginPath();
      ctx.moveTo(0, -190);
      ctx.lineTo(0, -200);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
    // c.获取时间
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = hours + minutes / 60;
    minutes = minutes + seconds / 60;
    // d.绘制时针
    ctx.lineWidth = 5;
    ctx.save();
    ctx.translate(300, 300);
    ctx.rotate((hours * Math.PI) / 6);
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.lineTo(0, -100);
    ctx.stroke();
    ctx.restore();
    // e.绘制分针
    ctx.lineWidth = 2;
    ctx.save();
    ctx.translate(300, 300);
    ctx.rotate((minutes * Math.PI) / 30);
    ctx.beginPath();
    ctx.moveTo(0, 8);
    ctx.lineTo(0, -140);
    ctx.stroke();
    ctx.restore();
    // f.绘制秒针
    ctx.lineWidth = 1;
    ctx.strokeStyle = "red";
    ctx.save();
    ctx.translate(300, 300);
    ctx.rotate((seconds * Math.PI) / 30);
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -180);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
    // g.绘制交汇处
    ctx.fillStyle = "#ccc";
    ctx.save();
    ctx.translate(300, 300);
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }, [date]);
  return <canvas id="canvas" width="600" height="600"></canvas>;
}

ReactDOM.render(<BaseUse />, document.querySelector("#root"));
