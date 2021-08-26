const { useState } = window.React;

export default function LazyReact() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>LazyReact</h3>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  );
}
