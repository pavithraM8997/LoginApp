
import React, { useState,useEffect } from "react";
import"./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
   
    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      navigate("/welcome");
    } else {
      alert("Invalid email or password.");
    }
      
      setEmail("");
      setPassword("");
      setMessage("user.email");
     
  };

  return (
    <>
    <div>
      <h2>Logged-in Users</h2>
      {users.length === 0 ? (
        <p>No users are currently logged in.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.email}</li>  
          ))}
        </ul>
      )}
    </div>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button  type="submit">Log In</button>
      </form>
      <p>you have already an account<Link to ="/signup">Signup</Link></p>
    </div>
    </>
  );
}

export default Login;
