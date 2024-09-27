import ReactDOM from 'react-dom/client';
 
  const obj = new Date()
  const day = obj.getDay()
 
  let results
  switch(day){

    case 0:
       results="sunday"
        break
    
    case 1:
        results="monday"
        break  
    
    case 2:
        results="tuesday"
        break
    
    case 3:
       results="wednesday"
        break 
        
    case 4:
        results="thursday"
        break 
        
    case 5:
       results="friday"
        break
        
    case 6:
       results="saturay"
        break
    default:
        alert("not any day")
}
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
 
    
      <h1>{results}</h1>
    
  );



 