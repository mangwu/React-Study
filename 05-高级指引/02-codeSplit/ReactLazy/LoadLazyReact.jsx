const LazyReact = React.lazy(() => import("./LazyReact.jsx"));
const { Suspense } = window.React;

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyReact />
      </Suspense>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
