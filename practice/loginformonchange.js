import React from "react";
import { useState } from "react";
export default function App() {
  const [state, setState] = useState("React");

  const handler = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      <h2>{state}</h2>
      <input type="text" value={state} onChange={handler} />
    </>
  );
}
