import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  // State for managing user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate(); 

  // Handles user login
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
      console.log("User:", userCredential.user); 
      navigate("/dashboard"); 
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message);
    }
  };

  // Handles new user registration
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      console.log("User:", userCredential.user); 
      navigate("/dashboard"); 
    } catch (error) {
      console.error("Signup Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login / Sign Up</h2>

      {/* Email Input */}
      <input 
        type="email" 
        placeholder="Enter Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />

      {/* Password Input */}
      <input 
        type="password" 
        placeholder="Enter Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />

      {/* Buttons for Login & Signup */}
      <div className="auth-buttons">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Auth;