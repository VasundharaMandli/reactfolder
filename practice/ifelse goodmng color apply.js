import ReactDOM from 'react-dom/client';
 
  let obj = new Date()
  let hours = obj.getHours()
 
  let results
  let clr={}
  if (hours < 12) {
    results = "Good morning";
   clr.color = "#FFA500"; // Orange for morning
  } else if (hours < 18) {
    results = "Good afternoon";
    clr.color = "#4CAF50"; // Green for afternoon
  } else {
    results = "Good evening";
    clr.color= "#3F51B5"; // Indigo for evening
  }
  
 

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
 
    <>
     
      <h2 style={clr}>{results}</h2>
   
      </>
  );