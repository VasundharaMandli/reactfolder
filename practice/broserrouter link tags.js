import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import About from './About'
import Courses from './Courses'
function App(){
  return (
    <>
   <h1> React router dom</h1>
   <BrowserRouter>
   {/* <a href="/">Home</a>
   <a href="/about">About us</a>
   <a href="/courses">courses</a> */}
   <Link to="/">Home</Link>
   <Link to="/about">About us</Link>
   <Link to="/courses">Courses</Link>
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
