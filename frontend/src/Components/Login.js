import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassworod] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const logindata = res.json();

    if (res.status === 400 || !logindata) {
      window.alert("Invalid Email/Password");
    } else {
      window.alert("Login Successfull");
      navigate("/");
    }
  };
  return (
    <>
      <div
        className="main_box contact_bg"
        style={{ backgroundImage: `url(login.jpg)` }}
      >
        <div className="container">
          <h2 className="heading">Login</h2>
          <form method="POST">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-8 mx-auto mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="Password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassworod(e.target.value)}
                />
              </div>
              <div className="col-md-8 mx-auto mt-4 text-center">
                <input
                  type="submit"
                  name="signup"
                  className="custom_btn"
                  id="signup"
                  value="Login"
                  onClick={loginHandler}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
