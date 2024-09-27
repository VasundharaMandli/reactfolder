import React from 'react'
import {useState,useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function App() {
  var [state,setState]=useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    //.then(json=>console.log(json))
    .then(json=>setState(json))
  })
  return (<>
        {state.map((list)=>{
          return(
          <>
 <div className='container' >
      <div className='row'>
        {state.map((list) => {
          return(<>
          <div className='col-md-4 mb-3' align='center'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">ID: {list.id}</h5>
                <p className="card-text">title: {list.title}</p>
                <p className="card-text">price: {list.price}</p>
                <p className="card-text">description: {list.description}</p>
              </div>
            </div>
          </div></>)
        
          
})}
      </div>
    </div>

          </>
          )
        })}
        
   </>
      )
    }