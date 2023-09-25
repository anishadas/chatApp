import { getStorage } from "firebase/storage";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { Link } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Create a root reference
  const storage = getStorage();

  const handleChange = (e) => {
    // console.log(e.target.files[0])
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password)
      navigate('/')
    }

    catch (err) {
      setErr(true)
      console.log(err)
    }
    setLoading(false)
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <span className="app-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3481/3481038.png"
            alt="logo"
          />
        </span>
        <span className="app-title">Chat App</span>
      </div>
      <div className="form-wrapper">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
          <button className="register btn" type="submit">Login</button>
          {err && <span>Something went wrong</span>}
        </form>
      </div>
      <p>
        Don't have an account?
        <Link to='/register'>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
