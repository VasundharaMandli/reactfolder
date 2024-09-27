import React from "react";
import  { useState }from 'react'

export default function App() {
 const data=['apple','banana','grapes','guava','watermelon','jackfruit']
 const[fruit,setFruit]=useState(data)

 return (<>
 {fruit.filter(x=>x.includes('b')).map((list)=>{
  return(<>
  <li>{list}</li>
  </>)
 })}
 </>
    
  );
}
