import { useState } from "react"
const App=()=>{
    const [state,setState]=useState("Single page Applicaton")
    const[age,setAge]=useState(22)
    return(
        <>
        <h1>React</h1>
        <h2>{state}</h2>
        <h2>{age}</h2>
        </>
    )
}
export default App