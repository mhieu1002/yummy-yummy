import React, { useState } from "react";
import "./User.scss";

const User = (props) => {
  const { user, setUser } = props;
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const check = () => {
    setUser(!user);
    setLogin(true);
  };

  return (
    <form className={user ? "user-form open-user-form" : "user-form"}>
      <i className="fas fa-times user-close" onClick={() => check()}></i>
      <div className={login ? "user" : "user none"}>
        <div className="login">
          <h1>Login</h1>
          <input
            placeholder="Phone Number"
            type="tel"
            className="email-box"
            pattern="[0]{1}[0-9]{9}"
            required
          />
          <input
            placeholder="Password"
            type="password"
            className="pass-box"
            required
            
          />
          {/* <input
            spellCheck="false"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="pass-box"
            required
          />
          <span onClick={() => setShowPassword(!showPassword)} className="icons-eye">
            {showPassword ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </span> */}
          <button>Log In</button>
        </div>
        <span onClick={() => setLogin(!login)}>Create New Account</span>
      </div>
      <div className={login ? "user none" : "user"}>
        <div className="sign-up">
          <h1>Sign Up</h1>
          <div className="text-box">
            <input placeholder="First Name" type="text" required />
            <input placeholder="Surname" type="text" required />
          </div>
          <input
            placeholder="Phone Number"
            type="tel"
            className="email-box"
            pattern="[0]{1}[0-9]{9}"
            required
          />
          <input
            placeholder="Password"
            type="password"
            className="pass-box"
            required
          />
          <input
            placeholder="Confirm Password"
            type="password"
            className="pass-box"
            required
          />
          <button>Sign Up</button>
        </div>
        <span onClick={() => setLogin(!login)}>Log In</span>
      </div>
    </form>
  );
};

export default User;
