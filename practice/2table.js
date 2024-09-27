import { useState } from 'react';

const App = () => {
  const num=2
  const arr = [1,2,3,4,5,6,7,8,9,10];
  
  return (
    <>
      <h1>React Map with Table</h1>
      <table border= '1px'>
        
          {arr.map((x) => {
                return<tr>
                  <td>{num} </td>
                  <td>X</td>
                  <td>{x}</td>
                  <td>=</td>
                  <td>{num*x}</td>
                </tr>
})}
     
      </table>
    </>
  )
}

export default App;
