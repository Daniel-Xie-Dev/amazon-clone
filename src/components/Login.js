import "./Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="login_top">
        <Link to="/">
          <img
            className="login_logo"
            src="https://rmhcsoutherncolorado.org/wp-content/uploads/2019/01/amazon-logo-transparent.png"
            alt=""
          />
        </Link>

        <div className="login_content">
          <div className="login_container">
            <h1>Sign-In</h1>
            <form>
              <h5>E-mail</h5>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <h5>Password</h5>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="login_signInButton"
                type="submit"
                onClick={signIn}
              >
                Sign In
              </button>
            </form>
            <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
          </div>

          <div className="login_register">
            <p>New to Amazon?</p>
            <button className="login_registerButton">
              Create your Amazon account
            </button>
          </div>
        </div>
      </div>

      {/* <div className="login_bottom">
        <div className="login_policy">Hello</div>
      </div> */}
    </div>
  );
}

export default Login;
