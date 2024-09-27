import ReactDOM from "react-dom/client"
var course="React"
var num1=30
var num2=50
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h1>Welcome to {course} world</h1>
<h3>Number1 is{num1} and Number2 is{num2}</h3>
<h4>total of {num1} and{num2} is {num1+num2}</h4>

</>
);