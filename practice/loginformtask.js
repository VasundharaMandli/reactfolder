import React, { useState } from "react";
import sam from './right.jpg';
import sab from './wrong.jpg';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(null);

  const validEmail = "vasu@gmail.com";
  const validPassword = "Vasu@123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginLeft: '10px' }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      
      {isValid === true && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img src={sam} alt="Success" style={{ width: '150px', height: '150px' }} />
          <p>Login successful! Welcome.</p>
        </div>
      )}

      {isValid === false && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img src={sab} alt="Error" style={{ width: '150px', height: '150px' }} />
          <p>Invalid email or password.</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
