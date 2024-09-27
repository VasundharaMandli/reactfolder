import ReactDOM from 'react-dom/client';
import pic from './vasu1.jpg'
const pic1="https://th.bing.com/th/id/OIP.Q5ru_cO9aghBObUCVzo74gHaE7?rs=1&pid=ImgDetMain"
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
 
    <>
     <h2>images</h2>
     <img src={pic} alt='' width={500}/>
     <br/>
     <img src={pic1} alt="" width={400}/>
     <br/>
     <img src='flower.jpg' alt=''/>
   
      </>
  );