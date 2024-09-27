import ReactDOM from "react-dom/client";

const prn = prompt("Enter principle amount");
const roi = prompt("Enter rate of intrest");
const total = prn*roi/100

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
        <td>{prn}</td>
          <td>{roi}%</td>
          <td>{total}</td>

        </tr>
      </tbody>
    </table>
  </>
);
