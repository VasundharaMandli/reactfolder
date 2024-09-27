import ReactDOM from "react-dom/client";
const person={
    name:"vasundhara",
    place:'hyderabad',
    age:23
   
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

   <h1>{person.name}</h1>
   <h1>{person.place}</h1>
   <h1>{person.age}</h1>
 
</>
 
);

