import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signIn, setUser, user } = useContext(AuthContext);
 

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginWithGoogle = () => {};

  return (
    !user && (
      <div>
        <div className="form-container">
          <h2 style={{ marginLeft: "auto", marginRight: "auto" }}>Login</h2>
          <form onSubmit={handleLogin} className="form" action="">
            <div>
              <label htmlFor="email-field">Email Address</label>
              <br />
              <input
                type="email"
                name="email"
                id="email-field"
                placeholder="Your email here"
                required
              />
            </div>
            <div>
              <label htmlFor="password-field">Password</label>
              <br />
              <input
                type="password"
                name="password"
                id="password-field"
                placeholder="Password here"
                required
              />
            </div>
            {/* <button className="btn-sign-up">Login</button> */}
            <div>
              <input type="submit" className="btn-sign-up" value="Login" />
            </div>
          </form>

          <p style={{ marginTop: "1px", marginBottom: "1px" }}>
            New to ema-john?{" "}
            <Link to="/sign-up">
              <span className="login-text">Sign Up first</span>
            </Link>{" "}
          </p>
          <div className="or-section">
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <p>or</p>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <div className="social-link-container">
            <div className="social-link" onClick={handleLoginWithGoogle}>
              <img
                className="social-logo"
                src={"/src/assets/googleLogo.png"}
                alt=""
              />
              <p>Continue With Google</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
