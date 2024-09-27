import ReactDOM from "react-dom/client";

let dollar=prompt("Enter no.of dollar")
 
let result=dollar*83.96

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   
   <table border="2px ">
    <tr>
       
        <td>Dollar</td>
        <td>Indian Rupess</td>
    </tr>
    <tr>
       
        <td>{dollar}</td>
        <td>{result}</td>
    </tr>
</table>
</>
 
);

