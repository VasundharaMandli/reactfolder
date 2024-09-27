import React from 'react'
export default function Comp1(props){
    return(
        <div>
           <h2>image{props.name}</h2>
           <img src={props.pic} alt='' width="200px"/>
        </div>
    )
}