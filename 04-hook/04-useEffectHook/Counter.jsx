const { useState, useEffect } = window.React;


function Counter() {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    // effect
    document.title = `You click ${counter} times`;

    // remove effect
    // return () => {
    //   cleanup
    // };
  });

  function handleClick() {
    setCounter((counter) => {
      return counter + 1
    })
  }

  return (
    <div>
      <div>You click {counter} times</div>
      <button onClick={handleClick}>
        click + 1
      </button>
    </div>
  )
}

ReactDOM.render(
  <Counter />,
  document.querySelector("#root")
)

