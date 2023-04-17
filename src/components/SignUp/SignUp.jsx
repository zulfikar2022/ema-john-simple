import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const {createUser} = useContext(AuthContext);

  const handleSignUp = (event) => {
    setError('');
    setSuccess('');
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email,password,confirmPassword);

    if(password !== confirmPassword){
        setError('your password did not match');
        setSuccess('');
        return ;
    }
    else if (password.length <6){
        setError('password must be six character or longer');
        setSuccess('')
        return;
    }
   createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            setSuccess('Account created successfully!!!')
            setError('');
        })
        .catch(error => {
            console.log(error);
            setSuccess('');
            setError(error.message)
        })



  };
  const handleSignUpWithGoogle = () => {

  }

  return (
    <div className="form-container">
      <h2 style={{ marginLeft: "auto", marginRight: "auto", marginTop:'2px',marginBottom:'2px' }}>Sing up</h2>

      <form onSubmit={handleSignUp} className="form" action="">
        <div>
          <label htmlFor="email-field">Email Address</label>
          <br />
          <input
            type="email"
            name="email"
            id="email-field"
            placeholder="email here"
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
            placeholder="password"
            required
          />
        </div>
        <div>
          <label htmlFor="password-confirm-field">Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            id="password-confirm-field"
            placeholder="confirm password"
            required
          />
        </div>
        <div className="btn-sign-up-container">
            <input type="submit" className="btn-sign-up" value='Sign Up' />
        </div>
          
        
      </form>

      <p style={{marginTop:'1px',marginBottom:'1px'}}>
        Already have an account?{" "}
        <Link to="/login">
          <span className="login-text">Login</span>
        </Link>{" "}
      </p>
      {error && <p className="text-warning">{error}</p>}
      {success && <p className="text-success"> {success}</p>}
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
        <div className="social-link" onClick={handleSignUpWithGoogle}>
          <img
            className="social-logo"
            src={"/src/assets/googleLogo.png"}
            alt=""
          />
          <p>Continue With Google</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

{
  /* <div className="btn-sign-up-container">
<button className="btn-sign-up">Sign Up</button>
</div> */
}
