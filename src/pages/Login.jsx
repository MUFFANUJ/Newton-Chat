import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import nstlogo from "../img/NST logo (1).png"


const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <img src={nstlogo}/>
        <span className="logo">Newton Chat</span>
        <span className="title">Login</span>
        
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          {err && <span className="error2">Something went wrong!<br />Try Again</span>}
        </form>
        <p> Don't have an account? <Link className="link" to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
