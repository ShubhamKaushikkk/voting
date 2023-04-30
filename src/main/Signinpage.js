import React, { useState } from "react";
import { render } from "react-dom";
import { useNavigate, redirect } from "react-router-dom";
import "./Signinpage.css";

const Login = (props) => {
  const [isEmailValid, setEmailValid] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pass, setPass] = useState(true);
  const [checked, setChecked] = useState(false);
  let navigate = useNavigate();

  const handleCheck = (e) => {
    let value = checked ? false : true;
    setChecked(value);
  };

  const handleValidEmail = (e) => {
    let value = e.target.value;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (RegExp(reg).test(value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    setEmail(value);
  };

  const handlePass = (e) => {
    let value = e.target.value;
    if (value.length < 7) {
      setPass(false);
    } else {
      setPass(true);
    }
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "raghav@gmail.com") {
      if (password === "1234567") {
        navigate("/DashBoard", { replace: true });
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("Email Address Not Found");
    }
  };
  return (
    <div className="Signin">
      <h1>Voters Registeration Portal</h1>
      <form onSubmit={handleSubmit} className="forms">
        <div />
        <h2>Sign in to your account</h2>
        <div className="entries">
          <br />
          Your Email:
          <br />
          <input
            style={
              isEmailValid
                ? { border: "2px solid black" }
                : { border: "2px solid red" }
            }
            id="mail"
            type="email"
            placeholder="Username"
            value={email}
            onChange={handleValidEmail}
            className="pass"
          />
          <h6 className="errormessage">
            {isEmailValid ? <br /> : "Not Valid"}
          </h6>
        </div>

        <div className="entries">
          Password:
          <br />
          <input
            id="password"
            style={{ border: "2px solid black" }}
            type={checked ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePass}
            className="pass"
          />
          <h6 className="errormessage">
            {pass ? (
              <br />
            ) : (
              <span style={{ color: "orange" }}>Characters less than 7</span>
            )}
          </h6>
        </div>
        <div>
          <input type="checkbox" value={checked} onChange={handleCheck} />
          <label style={{ color: "black" }}>Show Password</label>
        </div>

        {/* <h5>
          Not your computer? Use Guest mode to sign in privately.
          <br />
          <a
            style={{ color: "blue" }}
            href={"https://support.google.com/chrome/answer/6130773?hl=en"}
          >
            Learn More
          </a>
        </h5> */}
        <br />
        <span>
          <input
            type="button"
            value="CONTINUE"
            onClick={handleSubmit}
            className="continue_button"
          />

          {/* <input
            type="button"
            value="Register"
            onClick={() => {
              props.history.push("/Signup");
            }}
            className="button"
          /> */}
        </span>
      </form>
    </div>
  );
};

export default Login;
