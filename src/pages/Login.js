import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [registeredData, setRegisteredData] = useState();

  const onSubmit = (data) => {
    setLoginData(data);
    Validate();
  };

  useEffect(() => {
    let list = localStorage.getItem("list");
    if (list) {
      list = JSON.parse(localStorage.getItem("list"));
      return setRegisteredData(list);
    } else {
      return [];
    }
  }, [loginData]);

  const Validate = () => {
    if (
      loginData.email === registeredData.email &&
      loginData.password === registeredData.password
    ) {
      setLoginSuccess(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
    } else {
      setLoginError(true);
      setTimeout(() => {
        setLoginError(false);
      }, 2500);
    }
  };

  return (
    <div className="form-wrapper-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
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
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/g,
                    message: "Invalid Email",
                  },
                })}
              />
            </label>
            {errors.email && (
              <div className="error-message">{errors.email?.message}</div>
            )}
          </div>
          <div className="formfield-container">
            <label htmlFor="name" className="required">
              Password
              <input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
              />
            </label>
            {errors.email && (
              <div className="error-message">{errors.password?.message}</div>
            )}
          </div>
          <button type="submit" className="cta-btn">
            Login
          </button>
          <div className="cta-btn">
            <Link to="/">Sign Up</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
