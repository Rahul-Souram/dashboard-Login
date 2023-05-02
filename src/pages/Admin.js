import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showData, setShowData] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [registeredData, setRegisteredData] = useState();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    let list = localStorage.getItem("list");
    if (list) {
      list = JSON.parse(localStorage.getItem("list"));
      return setRegisteredData(list);
    } else {
      return [];
    }
  }, []);

  const Validate = () => {
    if(password !== "" && email !== "") {
      if(
        email === registeredData.email &&
        password === registeredData.password
        ) {
          setLoginSuccess(true);
          setShowData(true);
        } else {
          setLoginError(true);
        }
      }else{
        setLoginError(true);
      };
    }
    
    const handler =(e)=> {
  e.preventDefault();
  Validate();
    }

  return (
    <div className="form-wrapper-container">
      <form className={showData ? "form-container hide": "form-container"}>
        <h2>Login Form</h2>
        <div className="form-container-inner">
          {loginSuccess && (
            <div className="success-message">Login Successful !</div>
          )}
          {loginError && (
            <div className="error-message">Invalid Credentials !</div>
          )}
          <div className="formfield-container">
            <label htmlFor="email" className="formfield-label">
              Email Address
              <input
                id="email"
                type="email"
                onChange={(e)=> setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="formfield-container">
            <label htmlFor="name" className="required">
              Password
              <input
                type="password"
                onChange={(e)=> setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="cta-btn" onClick={(e)=> handler(e)}>
            Login
          </button>
          <div className="cta-btn">
            <Link to="/contact">Register</Link>
          </div>
          <h3>Please fill the contact form first</h3>
        </div>
      </form>
      { showData && (
        <div className="section-container-inner">
        <div className="content"><strong>Name :</strong> {registeredData.name}</div>
        <div className="content"><strong>Email :</strong> {registeredData.email}</div>
        <div className="content"><strong>Phone No :</strong> {registeredData.phoneNo}</div>
        </div>
      )}
    </div>
  );
};

export default Login;
