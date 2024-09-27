import React, { useState, useEffect } from 'react';

export default function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setState(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ul>
      {state.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
