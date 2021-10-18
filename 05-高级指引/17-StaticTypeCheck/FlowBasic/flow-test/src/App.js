// @flow
import React, { useState, useEffect } from "react";

function App(): any {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h2>时间</h2>
      <div>{date.toLocaleString()}</div>
    </div>
  );
}

export default App;
