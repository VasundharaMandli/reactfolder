import ReactDOM from "react-dom/client";
let marks=prompt("enter marks")
let result;
if (marks<=35){
    result="failed"
}   else{
    result="passed"
} 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  <h1>{result}</h1>
</>
 
);

