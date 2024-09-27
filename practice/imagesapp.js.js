import Comp1 from "./Comp1"
import Comp2 from "./Comp2"
const App=()=>{
    var name1="vasu"
     var name2="vicky"
    let pic="https://th.bing.com/th/id/OIP.Q5ru_cO9aghBObUCVzo74gHaE7?w=278&h=183&c=7&r=0&o=5&pid=1.7"
     let pic1="https://th.bing.com/th/id/OIP.i2zI7vDSAhmyBpO5jt1AQwHaFj?w=214&h=180&c=7&r=0&o=5&pid=1.7"
    return(
        <>
        <Comp1 name={name1} pic={pic}/>
        <Comp2 name={name2} pic={pic1}/>
        
        </>
    )
}
export default App