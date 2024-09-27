import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import pic from './vasu1.jpg'
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div className='container'>
      <div className='row'>
        {data.map((item) => (
          <div className='col-md-4 mb-3' key={item.id} align='center'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" style={{ color: 'red' }}>
                   {item.name}
                </h5>
                <img src={pic} alt='' style={{ width: '100px', height: '100px',borderRadius:'50%' }} />
                <p className="card-text" style={{ color: 'green' }}>
                  For simplicity, inline styles are used, but you can move styles to a CSS file or use styled-components for a more robust solution.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
