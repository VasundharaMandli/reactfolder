import { useState } from "react"
const App=()=>{
    const person={
           fname:"vasu",
           lname:"vicky",
           age:24,
           place:"Hyderabad"
    }
    const [state,setState]=useState(person)

    return(
        <>
        <h1>React</h1>
        <h2>{person.fname}</h2>
        <input type="text" value={person.age}/>
        </>
    )
}
export default App