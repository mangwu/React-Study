const { useState, useEffect } = window.React;
/**
 * @description 使用React开发工具或者浏览器Performance查看React挂载渲染时的记录
 * @function App
 * @returns {object} jsx元素
 */
function App() {
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h2>时钟表盘</h2>
      <ClockDial date={date} />
      <div>{date.toLocaleString()}</div>
    </div>
  );
}
function ClockDial({ date }) {
  useEffect(() => {
    // 1.获取画布
    let canvas = document.querySelector("#canvas");
    // 2.获取上下文对象
    let cx = canvas.getContext("2d");
    // 3.设置画笔样式
    cx.fillStyle = "orange";
    cx.strokeStyle = "black";
    // a.绘制表盘
    cx.beginPath();
    cx.arc(300, 300, 200, 0, Math.PI * 2);
    cx.closePath();
    cx.fill();
    cx.stroke();
    // b.绘制时刻度
    cx.lineWidth = 2;
    cx.strokeStyle = "black";
    for (let i = 0; i < 12; i++) {
      // 保存状态，即保存lineWidth为2，线条为黑色的状态
      cx.save();
      // 移动坐标系起始点到中心
      cx.translate(300, 300);
      // 以起始点为中心，将x轴旋转的度数
      cx.rotate(i * (Math.PI / 6));

      // 开始绘制每一个时刻度
      cx.beginPath();
      // 从中心点自(0, -180)向上绘制20的距离,到表盘边缘
      cx.moveTo(0, -180);
      cx.lineTo(0, -200);
      cx.closePath();
      cx.stroke(); //描边时不会闭合路径，所以需要添加闭合路径

      // 绘制该刻度处的时间
      cx.fillStyle = "black";
      cx.font = "16px blod";
      // 顺时针旋转30度的原因是刻度是从12开始，但是文字从1开始，文字是下一刻度
      cx.rotate(Math.PI / 6);
      cx.fillText(i + 1, -5, -165);

      // 重置状态，包括绘制的样式和坐标系中心和旋转角度
      cx.restore();
    }
    // c.绘制分刻度
    for (let i = 0; i < 60; i++) {
      // 保存状态
      cx.save();
      cx.translate(300, 300);
      cx.rotate(i * (Math.PI / 30));
      cx.beginPath();
      cx.moveTo(0, -190);
      cx.lineTo(0, -200);
      cx.closePath();
      cx.stroke();
      cx.restore();
    }
    // 获取当前时间
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    // 时钟特性是小时会根据分钟的时间进行旋转转动，分钟会根据秒钟的时间进行旋转转动
    hour = hour + minute / 60;
    minute = minute + second / 60;

    // e.绘制时针
    cx.lineWidth = 5;
    cx.save();
    cx.translate(300, 300);
    // 5点就是 5小时，5小时顺时针旋转150度，
    cx.rotate(hour * (Math.PI / 6));
    cx.beginPath();
    cx.moveTo(0, 10);
    cx.lineTo(0, -120);
    cx.closePath();
    cx.stroke();
    cx.restore();

    // f.绘制分针
    cx.lineWidth = 3;
    cx.save();
    cx.translate(300, 300);
    // 一分钟是60分钟的一份，需要移动[360 * (1/60)](8)度
    cx.rotate(minute * (Math.PI / 30));
    cx.beginPath();
    cx.moveTo(0, 15);
    cx.lineTo(0, -150);
    cx.closePath();
    cx.stroke();
    cx.restore();

    // g.绘制秒针
    cx.lineWidth = 2;
    cx.strokeStyle = "red";
    cx.save();
    cx.translate(300, 300);
    // 一秒钟移动8度，和分钟一样
    cx.rotate(second * (Math.PI / 30));
    cx.beginPath();
    cx.moveTo(0, 20);
    cx.lineTo(0, -180);
    cx.closePath();
    cx.stroke();
    cx.restore();

    // 绘制交叉处
    cx.fillStyle = "#ccc";
    cx.strokeStyle = "red";
    cx.save();
    cx.translate(300, 300);
    cx.beginPath();
    cx.arc(0, 0, 5, 0, Math.PI * 2);
    cx.closePath();
    // 填充中心圆心
    cx.fill();
    // 圆心描边
    cx.stroke();
    cx.restore();
  }, [date]);
  return <canvas id="canvas" width="600px" height="600px"></canvas>;
}
ReactDOM.render(<App />, document.querySelector("#root"));
