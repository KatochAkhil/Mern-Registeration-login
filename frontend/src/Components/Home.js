import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      <div
        className="banner_text contact_bg home_banner"
        style={{ backgroundImage: `url(contact.jpg)` }}
      >
        <div>
          <h1 className="heading">Change the world by being yourself.</h1>
          <div className="text-center mt-4">
            <Link to="/register" className="custom_btn btn_banner">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
