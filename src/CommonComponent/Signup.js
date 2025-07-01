import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./signup.css";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdKeypad } from "react-icons/io";
export default function Signup() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');

     const handleLogin = (e) => {
  e.preventDefault();

  if (
    userName !== "" &&
    email !== "" &&
    password !== "" 
  ) {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  } else {
    alert("Please fill all fields correctly. Passwords must match.");
}
// return;
};


  return (
    <div className="section">
       <div className="Register-box">
        <form onSubmit={handleLogin} method="post">
            <h2>Register</h2>
            <div className="input-box">
                <span className="icon"><FaUserCircle /></span>
                    <input required type="userName" userName={userName} onChange={(e) => setUserName(e.target.userName)}  />
                    <label for=""> Username</label>
            </div>
            <div className="input-box">
                <span className="icon"><MdEmail /></span>
                    <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label for="">Email</label>
            </div>
            <div className="input-box">
                <span className="icon"><IoMdKeypad /></span>
                    <input required type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                    <label for="">Password</label>
            </div>
            <div className="input-box">
                <span className="icon"><IoMdKeypad /></span>
                    <input required type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <label for="">ConfirmPassword</label>
            </div>
            <button type="submit">Register</button>
            <div className="login-link">
                <p>Already have an account? <a href="./">Log in</a></p>
            </div>
            
        </form>
    </div>
 </div>
  )
}

