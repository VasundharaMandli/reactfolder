import ReactDOM from "react-dom/client";
const students=["vasu",'vicky','kiran','madhan','vidya']

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

   {students}
  <br/>
  <ul>
    <li>{students[0]}</li>
    <li>{students[1]}</li>
    <li>{students[2]}</li>
    <li>{students[3]}</li>
    <li>{students[4]}</li>
   
  </ul>
</>
 
);

