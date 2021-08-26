import React, { Suspense } from "react";
const Acpn = React.lazy(() => import("./Acpn"));
const Bcpn = React.lazy(() => import("./Bcpn"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Acpn />
        <Bcpn />
      </Suspense>
    </div>
  );
}
