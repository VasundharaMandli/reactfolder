import { useState } from "react"
import Data,{users} from './Data.js'
const App=()=>{
    const [state,setState]=useState(Data)
    const [user,setUser]=useState(users)

    return(
        <>
        <h1>React</h1>
        <h2>{state}</h2>
        <h2>{user[0].name}</h2>
        <h2>{user[1].name}</h2>
        
        </>
    )
}
export default App