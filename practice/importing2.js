import ReactDOM from 'react-dom/client';
import course,{place,age,demo} from './data'
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
    <h2>data values -importing & exporting</h2>
    <h1>{course}</h1>
    <h1>{place}</h1>
    <h1>{age}</h1>
    <h1>{demo()}</h1>
    </>
);
 