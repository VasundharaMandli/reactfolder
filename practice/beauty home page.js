import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import About from './About'
import Products from './Products'
import Services from './Services'
import Contact from './Contact'
import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from "./Home"
function App(){
  return (
    <>
   {/* <h1> React router dom</h1> */}
  
   <BrowserRouter>
   {/* <a href="/">Home</a>
   <a href="/about">About us</a>
   <a href="/courses">courses</a> */}
   <Link to="/">Home</Link>
   <Link to="/about">About us</Link>
   <Link to="/Products">Products</Link>
   <Link to="/Services">Services</Link>
   <Link to="/Contact">Contact</Link>

   <Routes>
    {/* <Route path="/" element={<h1>Main Root</h1>}/> */}
    <Route path="/index" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/Products" element={<Products/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/Contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>

{/* <!------------home pAGE---------> */}
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Glamour Beauty</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#products">Products</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    {/* <!-- Hero Section --> */}
    <header id="home" class="hero d-flex align-items-center">
        <div class="container text-center">
            <h1 class="display-1 mb-4">Discover Your Natural Beauty</h1>
            <p class="lead mb-5">Enhance your radiance with our premium beauty products</p>
            <a href="products" class="btn btn-primary btn-lg">Shop Now</a>
        </div>
    </header>

    {/* <!-- Featured Products Section --> */}
    <section id="products" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Featured Products</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card product-card">
                        <img src="https://th.bing.com/th/id/OIP.zqzMJbR9cpjKymVsYUcYGAHaIm?rs=1&pid=ImgDetMain" class="card-img-top" alt="Lipstick"/>
                        <div class="card-body">
                            <h5 class="card-title">Luxe Lipstick</h5>
                            <p class="card-text">Long-lasting, vibrant color for your lips.</p>
                            <a href="#" class="btn btn-outline-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card product-card">
                        <img src="https://www.livingvegan.com/wp-content/uploads/2019/05/elf_makeup.jpg" class="card-img-top" alt="Foundation"/>
                        <div class="card-body">
                            <h5 class="card-title">Flawless Foundation</h5>
                            <p class="card-text">Smooth, even coverage for a perfect complexion.</p>
                            <a href="#" class="btn btn-outline-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card product-card">
                        <img src="https://th.bing.com/th/id/OIP.Vv2GCYhmRZ-9lPB7bgrrOwHaHa?rs=1&pid=ImgDetMain" class="card-img-top" alt="Eyeshadow"/>
                        <div class="card-body">
                            <h5 class="card-title">Shimmer Eyeshadow Palette</h5>
                            <p class="card-text">Create stunning eye looks with our versatile palette.</p>
                            <a href="#" class="btn btn-outline-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- About Section --> */}
    <section id="about" class="py-5 bg-light">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h2 class="mb-4">About Glamour Beauty</h2>
                    <p>We believe in enhancing your natural beauty with high-quality, cruelty-free products. Our mission is to empower you to look and feel your best every day.</p>
                    <p>With a focus on innovation and sustainability, we bring you the latest in beauty technology while caring for our planet.</p>
                </div>
                <div class="col-md-6">
                    <img src="https://th.bing.com/th/id/OIP.ZrMWPnM7AOmMxxIt-YIhywHaEo?rs=1&pid=ImgDetMain" alt="About Us" class="img rounded"/>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Testimonial Section --> */}
    <section class="testimonial py-5">
        <div class="container">
            <h2 class="text-center mb-5">What Our Customers Say</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">"I love how these products make me feel confident and beautiful!"</p>
                            <footer class="blockquote-footer">Sarah J.</footer>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">"The quality is unmatched. I'm a customer for life!"</p>
                            <footer class="blockquote-footer">Emily R.</footer>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">"Finally, products that are both effective and eco-friendly!"</p>
                            <footer class="blockquote-footer">Lisa M.</footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section id="contact" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Get in Touch</h2>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Your Name" required/>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Your Email" required/>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Footer --> */}
    <footer class="bg-dark text-white py-4 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>About Us</h5>
                    <p>The Best Brands On The Beauty Scene With Fuss-Free Delivery & Fantastic Prices.</p>
                </div>
                <div class="col-md-4">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="/home" class="text-white">Home</a></li>
                        <li><a href="/about" class="text-white">About</a></li>
                        <li><a href="/services" class="text-white">Services</a></li>
                        <li><a href="/courses" class="text-white">Courses</a></li>
                        <li><a href="/contact" class="text-white">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Contact Info</h5>
                    <address>
                        123 Main St, City, Country<br/>
                        Email: info@example.com<br/>
                        Phone: +1 234 567 8900
                    </address>
                </div>
            <div/>
            <hr/>
            <p class="bg-dark text-white text-center py-3">&copy; 2024 Glamour Beauty. All rights reserved.</p>
        </div>
        </div>
    </footer>
    
    </>
  )
}

export default App
