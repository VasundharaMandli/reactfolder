import React from 'react'
import { useState,useEffect }  from 'react'

export default function App() {
  const [city,setCity]=useState('')
  const [result,setResult]=useState('')
 const changeHandler=e=>{
  setCity(e.target.value)
 }
 const submitHandler=e=>{
  e.preventDefault()
 
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b4a871ea6b5cf21342217d615e18ad8`)
  .then(response => response.json()
 ).then(data=>{
  const kelvin=data.main.temp;
  const celsius=kelvin-273.15
  setResult(Math.round(celsius))
})
}
  return (
    <>
    <h2>hello</h2>
    {result+"deg"}
    <form onSubmit={submitHandler}>
      <input type='text' value={city} onChange={changeHandler}/>
<br/>
<input type='submit'/>
    </form>
     
    </>
  )
}
