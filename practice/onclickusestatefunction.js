import { useState } from "react"
const App=()=>{
  const [state,setState] =useState("React app")
const handler=()=>{
    setState("single page Application")
}
    return(
        <>
        <h1>{state}</h1>
      
       <button onClick={handler}>update state</button>
      
        </>
    )
}
export default App