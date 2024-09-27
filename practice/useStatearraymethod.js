import { useState } from "react"
const App=()=>{
    const students=['Vasu','Vicky','Kiran','Madhan','Neels']
    const [state,setState]=useState(students)

    return(
        <>
        <h1>React</h1>
        <h2>{state[0]}</h2>
        <input type="text" value={state[1]}/>
        </>
    )
}
export default App



7b4a871ea6b5cf21342217d615e18ad8

https://api.openweathermap.org/data/2.5/weather?q=kadapa&appid=7b4a871ea6b5cf21342217d615e18ad8
