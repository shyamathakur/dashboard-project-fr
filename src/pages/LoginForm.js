import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const LoginHandler = async () => {
    if (email === "") {
      alert("Please Enter Email");
    } else if (password === "") {
      alert("Please Enter Password");
    } else {
      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);
      try {
        const resp = await fetch(
          "https://travellingnorth.ca/MVA/public/api/login",
          {
            method: "POST",
            body: formdata,
          }
        );
        const result = await resp.json();
        console.log(result.token)
        if (result.token !== "" && result.token !== undefined) {
          localStorage.setItem("token", result.token);
          alert("Login successfull..!");
          navigate("/dashboard");
        }else{
          alert(result.error)
        }
        console.log("login---", result);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <div className="login-main-div">
      <div className="login-form-main-div">
        <div className="text-form-div-child">
          <div className="child-div">
            <p className="werlcome-galaxy">
              <strong>
                New Features
                <br /> One app Solution
              </strong>
            </p>
            <p className="welcome-ipsum-text">
              All the Lorem Ipsum generators on{" "}
            </p>
          </div>
        </div>
        <div className="form-div-child">
          <div className="form-div">
            <div className="create-accound-div">
              <p className="werlcome-galaxy">
                <strong>
                  Welcome
                  <br />
                  To the Website
                </strong>
              </p>
              <p className="user-account-p-text">
                {" "}
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
              <p className="CREATR-ACCOUNT">CREATE ACCOUNT</p>
            </div>
            <div className="user-login">
              <p className="user-heading">
                <strong>USER LOGIN</strong>
              </p>
              <div className="input-div">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-login"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="input-div">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-login"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="remember-pass-div">
                <div>
                  <input type="checkbox" />
                  <label className="remember-p">Remember</label>
                </div>
                <p>Forgot password</p>
              </div>
              <div className="button-login-div">
                <button
                  onClick={() => LoginHandler()}
                  className="button-login-form"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
