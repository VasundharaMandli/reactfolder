import ReactDOM from "react-dom/client";


const num1 = 30;
const num2 = 50;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    <table border="5px solid black">
      <thead>
        <tr>
          <th>Principle Amount</th>
          <th>Rate of Interest</th>
          <th>Interest Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{num1}</td>
          <td>{num2}%</td>
          <td>{(num1 * num2 / 100).toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  </>
);
