import { BrowserRouter,Routes,Route } from "react-router-dom"

function App(){
  return (
    <>
   <h1>BrowserRouter</h1>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<h1>Main Root</h1>}/>
    <Route path="/about" element={<h2>about us page</h2>}/>
    <Route path="/courses" element={<h2>courses</h2>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
