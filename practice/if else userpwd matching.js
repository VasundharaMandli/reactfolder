import ReactDOM from "react-dom/client";
let uid=prompt("enter user id")
let pwd=prompt("enter user password")
let result;
if(uid==="mouritech" && pwd==="madhapur"){
  result="authorised user"
}else{
     result="unauthorised user"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

 <h1>{result}</h1>
</>
 
);

