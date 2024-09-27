// Import statements
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import pic from './vasu.jpg'

// Create root and render
const root = createRoot(document.getElementById('root'));
root.render(
  <>
    {/* First container */}
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 bg-warning">
          React is a JavaScript library for building user interfaces.
          React is used to build single-page applications.
          React allows us to create reusable UI components.
          React is a JavaScript library for building user interfaces.
          React is used to build single-page applications.
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 bg-success">
          <h1  className='text-center'>bootstrap</h1>
          <ol>
            <li>Html</li>
            <li>Css</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ol>
        </div>
      </div>
    </div>

    {/* Second container */}
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-danger">
          React is a JavaScript library for building user interfaces.
          React is used to build single-page applications. React is a JavaScript library for building user interfaces.
          React is used to build single-page applications. React is a JavaScript library for building user interfaces.
          React is used to build single-page applications. React is a JavaScript library for building user interfaces.
          React is used to build single-page applications.React is a JavaScript library for building user interfaces.
          React is used to build single-page applications.
          React allows us to create reusable UI components.
          React is a JavaScript library for building user interfaces.
          React is used to build single-page applications.
        </div>
      </div>
    </div>

    {/* Third container */}
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 bg-success">
          <img src='./flower.jpg' alt="Flower" className="img-fluid" />
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 bg-primary">
          React is a JavaScript library for building user interfaces.
          React is used to build single-page applications. React is a JavaScript library for building user interfaces.
          
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 bg-info">
          <img src={pic} alt="Flower" className="img-fluid"/>
        </div>
      </div>
    </div>
  </>
);
