import React from 'react'
import { useState,useEffect }  from 'react'

export default function App() {
  const [state,setState]=useState('')
  useEffect(()=>{

  })
 fetch("https://api.openweathermap.org/data/2.5/weather?q=kadapa&appid=7b4a871ea6b5cf21342217d615e18ad8")
.then(res=>res.json())
//.then(json=>console.log(json))
.then(json=>setState(json.main.temp))

 
  return (
    <>
    <h2>{state}</h2>
     {/* {state.map((list)=>{
      return(
        <h2>{list.main.temp}</h2>
      )
     }
    )} */}
    </>
  )
}
