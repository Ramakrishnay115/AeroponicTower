import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginstyle.css';
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
export default function Login() {
  const navigate = useNavigate();
  
  // State for input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Dummy credentials for validation (for example purpose)
  const validEmail = "test@example.com";
  const validPassword = "123456";

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Basic check (you can expand this with real auth logic)
    if (email === validEmail && password === validPassword) {
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="section">     
      <div className="login-box">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="input-box">
            <span className="icon"><MdEmail /></span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><FaKey /></span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="remember-forget">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forget Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="./Signup">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
