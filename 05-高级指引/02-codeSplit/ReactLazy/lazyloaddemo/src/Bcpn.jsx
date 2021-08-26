import { useState } from 'react'; 

export default function Bcpn() {
  const [val, setval] = useState(0);

  return (
    <div>
      <h3>LazyReact</h3>
      <div>{val}</div>
      <input type="text" value={val} onChange={(e) => setval(e.target.value)} />
    </div>
  );
}
