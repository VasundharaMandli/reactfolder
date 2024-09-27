import { BrowserRouter,Routes,Route } from "react-router-dom"
import About from './About'
import Courses from './Courses'
function App(){
  return (
    <>
   <h1> React router dom</h1>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<h1>Main Root</h1>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/courses" element={<Courses/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
