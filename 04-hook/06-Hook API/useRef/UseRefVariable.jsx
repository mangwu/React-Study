/**
 * 将useRef作为实例变量使用
 */
function Timer() {
  const [date, setDate] = React.useState(new Date());
  const interval = React.useRef(null);
  React.useEffect(() => {
    interval.current = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return <div>{date.toLocaleDateString()}{date.toLocaleTimeString()}</div>;
}
ReactDOM.render(<Timer />, document.querySelector("#root2"))