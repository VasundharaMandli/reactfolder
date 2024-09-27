import React from "react";
import  { useState }from 'react'
import './style.css'

export default function App() {
  const [color, setColor] = useState("");

  const handler = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
    <div 
  className="color-display"
  style={{ backgroundColor: color }}
></div>

      <input
        type="text"
        value={color}
        onChange={handler}
        placeholder="Enter a color name"
      />
      <br/>
      <select value={color} onChange={handler}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="black">Black</option>
      </select>
      <br/>
     
    </>
  );
}
