import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    confirmPassword: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, confirmPassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        confirmPassword,
      }),
    });
    const dataNew = await res.json();
    console.log(dataNew);
    if (dataNew.status === 422 || !dataNew) {
      window.alert("Registeration Failed");
      console.log("Registertion Failed");
    } else {
      window.alert("Successfull");
      console.log("Successfull");
      navigate(`/login`);
    }
  };
  return (
    <div className="main_container">
      <div
        className="main_box contact_bg"
        style={{ backgroundImage: `url(login.jpg)` }}
      >
        <div className="container">
          <h2 className="heading">Register Now</h2>
          <form method="POST">
            <div className="row">
              <div className="col-md-6 col-12 mt-4">
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInput}
                  placeholder="Name"
                  className="form-control"
                  id="name"
                  autoComplete="off"
                />
              </div>
              <div className="col-md-6 col-12 mt-4">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Email"
                  className="form-control"
                  id="email"
                  autoComplete="off"
                />
              </div>
              <div className="col-md-6 col-12 mt-4">
                <input
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                  placeholder="Number"
                  className="form-control"
                  id="number"
                  autoComplete="off"
                />
              </div>
              <div className="col-md-6 col-12 mt-4">
                <input
                  type="text"
                  name="work"
                  value={user.work}
                  onChange={handleInput}
                  placeholder="Proffesion"
                  className="form-control"
                  id="proffesion"
                  autoComplete="off"
                />
              </div>
              <div className="col-md-6 col-12 mt-4">
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Password"
                  className="form-control"
                  id="Password"
                  autoComplete="off"
                />
              </div>
              <div className="col-md-6 col-12 mt-4">
                <input
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleInput}
                  placeholder="Confirm Password"
                  className="form-control"
                  id="confirmPassword"
                  autoComplete="off"
                />
              </div>
              <div className="col-md-12 text-center mt-4">
                <input
                  type="submit"
                  name="name"
                  className="custom_btn"
                  id="signup"
                  value="Register"
                  onClick={submitHandler}
                />
              </div>
            </div>
          </form>
          <Link to="/login" className="custom_link text-center">
            Already register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
