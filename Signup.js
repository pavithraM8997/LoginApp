
import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from 'react-router-dom'; 

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    setMessage("Signup successful! You can now log in.");
    navigate("/")
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
      
    </div>
  );
}

export default Signup;
