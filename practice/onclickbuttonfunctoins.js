const App=()=>{
    function demo(){
        alert("welcome to react functions")
    }

    return(
        <>
        <h1>React</h1>
       {/* {demo()} */}
       <button onClick={demo}>clickme</button>
       <button onMouseOver={demo}>mouseover</button>
       <button onMouseOut={demo}>mouseout</button>
        
        </>
    )
}
export default App