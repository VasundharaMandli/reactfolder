import React from 'react'
import {useState,useEffect } from 'react'
//import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function App() {
  var [value,setValue]=useState(0)
  useEffect(() => {
    console.log('clicked')
  }, [])

  function test(){
    setValue(value+1)
  }
  return (<>
        {value}
        <button onClick={test}>increment</button>
   </>
  )
  
}
