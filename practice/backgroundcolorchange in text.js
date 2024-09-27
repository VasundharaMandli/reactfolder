import React from "react";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState("React");

  const handler = (e) => {
    
    setState (e.target.value);
  };

  return (
    <>
      <h2 style={{ backgroundColor: state }}>Hello</h2>
      <input
        type="text"
        value={state}
        onChange={handler}
        placeholder="Enter a color name"
      />
    </>
  );
}
