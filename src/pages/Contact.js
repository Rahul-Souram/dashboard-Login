import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signupSuccess, setSignupSuccess] = useState(false);

  const onSubmit = (data) => {
    setList(data);
    setSignupSuccess(true);
  };

  const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
      return (list = JSON.parse(localStorage.getItem("list")));
    } else {
      return [];
    }
  };
  const [list, setList] = useState(getLocalStorage());
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div className="form-wrapper-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h2>Contact Form</h2>
        <div className="form-container-inner">
          <div className="formfield-container">
            <label htmlFor="name" className="formfield-label">
              Full Name :
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/g,
                    message: "Invalid Name. Avoid Special characters",
                  },
                })}
              />
            </label>
            {errors.email && (
              <div className="error-message">{errors.name?.message}</div>
            )}
          </div>
          <div className="formfield-container">
            <label htmlFor="email" className="formfield-label">
              Email Address :
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
            <label htmlFor="name" className="formfield-label">
              Password :
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
          <div className="formfield-container">
            <label htmlFor="contactno" className="formfield-label">
              Contact Number :
              <input
                id="contactno"
                type="number"
                {...register("phoneNo", {
                  required: {
                    value: true,
                    message: "Number is required",
                  },
                })}
              />
            </label>
            {errors.phoneNo && (
              <div className="error-message">{errors.phoneNo?.message}</div>
            )}
          </div>
          <button type="submit" className="cta-btn">
            Submit
          </button>
        </div>
        {signupSuccess && (
          <div className="success-message">
            You are successfully registered !
          </div>
        )}
      </form>
      <div className="cta-btn">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Contact;
