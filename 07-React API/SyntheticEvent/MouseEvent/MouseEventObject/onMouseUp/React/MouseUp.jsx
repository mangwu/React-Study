/**
 * @description 鼠标事件：mouseup
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-01-10 14:06:36
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const { useState, useRef, useEffect } = window.React;

/**
 * @description 绘图
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(_props) {
  // 线条颜色和宽度
  const [color, setColor] = useState("#000000");
  const [width, setWidth] = useState(1);
  // 绘图坐标和是否绘制信息
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const isDrawing = useRef(false);
  // canvas引用
  const canvasRef = useRef(null);
  // context
  const contextRef = useRef(
    canvasRef.current && canvasRef.current.getContext("2d")
  );
  // rect
  const rect = useRef(
    canvasRef.current && canvasRef.current.getBoundingClientRect()
  );
  // 绘画
  const drawLine = (context, x1, y1, x2, y2) => {
    // 开始绘制
    context.beginPath();
    // 设置颜色和宽度
    // console.log(color, width);
    context.strokeStyle = color;
    context.lineWidth = width;
    // 绘制
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    // 描线
    context.stroke();
    // 结束绘制
    context.closePath();
  };
  /**
   * @description 开始绘制初始化x,y和isDrawing
   * @param {MouseEvent} e mousedown事件
   */
  const handleMouseDown = (e) => {
    // console.log(e);
    // 起始坐标
    setX(e.clientX - rect.current.left);
    setY(e.clientY - rect.current.top);
    isDrawing.current = true;
  };
  /**
   * @description 监听鼠标按下时的移动事件，用于绘制线条
   * @param {MouseEvent} e 鼠标移动事件
   */
  const handleMouseMove = (e) => {
    // 如果鼠标处于按下状态，监听move进行绘制
    if (isDrawing.current) {
      // console.log(e);
      drawLine(
        contextRef.current,
        x,
        y,
        e.clientX - rect.current.left,
        e.clientY - rect.current.top
      );
      setX(e.clientX - rect.current.left);
      setY(e.clientY - rect.current.top);
    }
  };
  /**
   * @description 重置画布
   */
  const handleResetClick = () => {
    // 重置画面
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    // 重置选择的颜色和宽度
    setColor("#000000");
    setWidth(1);
  };
  // 全局监听
  useEffect(() => {
    // console.log(window);
    window.addEventListener("mouseup", (e) => {
      // 绘制最后一次的线条
      if (isDrawing.current) {
        // drawLine(
        //   contextRef.current,
        //   x,
        //   y,
        //   e.clientX - rect.current.left,
        //   e.clientY - rect.current.top
        // );

        setX(0);
        setY(0);

        isDrawing.current = false;
      }
    });
    // 初始化context和rect
    rect.current = canvasRef.current.getBoundingClientRect();
    contextRef.current = canvasRef.current.getContext("2d");
  }, []);
  return (
    <React.Fragment>
      <h2>React方式实现绘图</h2>
      <div>
        <label htmlFor="color">颜色选择</label>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="number">宽度选择</label>
        <input
          type="number"
          name="number"
          id="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <canvas
        id="canvas"
        ref={canvasRef}
        width="560"
        height="400"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      ></canvas>
      <input type="reset" value="重置" onClick={handleResetClick} />
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
