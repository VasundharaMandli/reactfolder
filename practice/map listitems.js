import { useState } from 'react';

const App = () => {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  
  return (
    <>
      <h1>React Map with Table</h1>
      <table border= '1px'>
        
          {arr.map((x) => {
                return<tr><td> {x} </td></tr>
})}
      
      </table>
    </>
  )
}

export default App;
