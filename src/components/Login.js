import React, { useState } from 'react';
import './Login.css';
import {  useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate ();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Logged in with username:', username, 'and password:', password);
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
   
  };

  return (
    <div className="login-container">
      
      {!forgotPassword ? (
        <form onSubmit={handleLogin}>
          <h1>Login Page</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" onClick={()=> navigate('/landing/'+username)} >Login</button>
          <button onClick={handleForgotPassword}>Forgot Password</button>
        </form>
      ) : (
        <div className="forgot-password-section">
          <h2>Forgot Password</h2>
          <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
  <button type="submit" onClick={()=> navigate('/login')} >SUBMIT</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
