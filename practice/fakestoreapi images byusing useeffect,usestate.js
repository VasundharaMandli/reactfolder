import React, { useState, useEffect } from 'react';
import './style.css';
 
export default function App() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState('');
 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);
 
  const handler = (e) => {
    setSearch(e.target.value);
  };
 
  return (
    <>
      <div  className="input-group mb-3 w-50 mt-5 " id='a'>
        <input type='text' value={search} onChange={handler}  />
      </div>
      <div className='container mt-5'>
        <div className='row'>
          {state.filter(x =>x.title.includes(search) || x.category.includes(search)).map((list) => {
            return (
              <div className='col-md-4 mt-3'>
                <div className="card">
                  <div className="card-body">
                    <img src={list.image} alt='' className='w-100 rounded' id='mypic' />
                    <h3 className="card-title text-center p-2 bg-info mt-2 text-danger">{list.id}</h3>
                    <h3 className="card-title text-center text-warning" id='one' >{list.title}</h3>
                  </div>
                  </div>
                  </div>
                      );
                     })}
                   </div>
                   </div>
                    </>
                    );
                    }