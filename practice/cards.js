import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App() {
  const [state, setState] = useState([]);

 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setState(json))
      
 

  return (<>
    <div className='container' >
      <div className='row'>
        {state.map((list) => {
          return(<>
          <div className='col-md-4 mb-3' align='center'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">ID: {list.id}</h5>
                <p className="card-text">Name: {list.name}</p>
                <p className="card-text">Username: {list.username}</p>
                <p className="card-text">Email: {list.email}</p>
              </div>
            </div>
          </div></>)
        
          
})}
      </div>
    </div>
    </>
  );
}
