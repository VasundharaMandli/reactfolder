import React from 'react'
import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function Contact() {
  return (
    <div>
       <header class="bg-dark text-white py-3">
        {/* <div class="container">
          
            <nav>
                <ul class="nav">
                    <li class="nav-item"><a href="#" class="nav-link text-white">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Services</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Contact</a></li>
                </ul>
            </nav>
        </div> */}
    </header>

    {/* <!-- Middle Content --> */}
    <main class="container my-5">
        <div class="row">
            <div class="col-md-6">
                <h2>Contact Us</h2>
                <form id="contactForm" class="contact-form">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" required/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" required/>
                    </div>
                    <div class="mb-3">
                        <label for="subject" class="form-label">Subject</label>
                        <input type="text" class="form-control" id="subject" required/>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-md-6">
                <h2>Our Location</h2>
                <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61812.54911225916!2d78.78834355351643!3d14.46835641641626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37210d4f26f87%3A0xaf158859a18a02a0!2sKadapa%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1727152838134!5m2!1sen!2sin" width="600" height="530" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </main>

    {/* footer */}
    <footer class="bg-dark text-white py-4 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>About Us</h5>
                    <p>Brief description of your company.</p>
                </div>
                <div class="col-md-4">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="/home" class="text-white">Home</a></li>
                        <li><a href="/about" class="text-white">About</a></li>
                        <li><a href="/services" class="text-white">Services</a></li>
                        <li><a href="/Products" class="text-white">Products</a></li>
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
            <p class="text-center mb-0">&copy; 2024. All rights reserved.</p>
        </div>
        </div>
    </footer>
    </div>
  
  )
}
