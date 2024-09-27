import ReactDOM from 'react-dom/client';
 
  const obj = new Date()
  const hours = obj.getHours()
 
  let results
  if (hours < 12) {
    results = "Good morning";
  } else if (hours < 18) {
    results = "Good afternoon";
  } else {
    results = "Good evening";
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
 
    
     
      <h1>{results}</h1>
   
    
  );