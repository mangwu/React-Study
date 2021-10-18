import React, { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h2>计数器</h2>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
