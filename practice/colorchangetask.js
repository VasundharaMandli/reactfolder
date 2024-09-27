import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
 
const course = prompt("Enter the course")
let color;
let err;
if(course==="red"){
    color="bg-danger";
}
else if(course==="blue"){
    color="bg-primary";
}
else if(course==="yellow"){
    color="bg-warning";
}
else if(course==="green"){
    color="bg-success";
}
 
else{
    err="Enter the correct value"
}
 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
 
    <h1  className={color}>Javascript</h1>
</>
);