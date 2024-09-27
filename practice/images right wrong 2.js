import ReactDOM from 'react-dom/client';
 import pic1 from './right.jpg'
 import pic2 from './wrong.jpg'
let uid = prompt("Enter your uid");
let result
if(uid=="mouritech"){
 result=pic1
}else{
 result=pic2
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
    <h2>images</h2>
    <img src={result} alt='' width={300}/>
     

    </>
);
 