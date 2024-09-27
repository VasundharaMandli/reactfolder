import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import About from './About'
import Courses from './Courses'
import Contact from './Contact'
import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App(){
  return (
    <>
   <h1> React router dom</h1>
  
   <BrowserRouter>
  <div className="conatiner-fluid">

  <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/About">About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Courses">Courses</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/Contact">Contact</Link>
  </li>
</ul>

<div className="row">
  <div className="col-md-4">
    left
  </div>
  <div className="col-md-8">
  <Routes>
<Route path="/" element={<h1>Main Root</h1>}/>
<Route path="/about" element={<About/>}/>
<Route path="/courses" element={<Courses/>}/>
<Route path="/Contact" element={<Contact/>}/>
</Routes>

  </div>
</div>
  </div>

  
   </BrowserRouter>
    </>
  )
}

export default App


