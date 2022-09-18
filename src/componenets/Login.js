import React, { useState } from "react";
import './login.css'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const signInHandle = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(auth => {navigate('/home')})
    .catch(error => console.error(error))
    // console.log(email, password)
  }

  const registerHandle = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(auth => {navigate('/home')})
    .catch(error => console.error(error))
  }

  return (
    <div className="div">
      <h1 className="h1">Sign-in</h1>
      <label className="label">E-mail</label>
      <input autoComplete="off" className="input" type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label>Password</label>
      <input autoComplete="off" className="input" type="password" name="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button className="button" onClick={signInHandle}>Sign In</button>
      <p>By Creating an account you agree to Conditions of use and Privacy Notice</p>
      <button className="Button" onClick={registerHandle}>Create Your Amazon Account</button>
    </div>
  );
};

export default Login;
