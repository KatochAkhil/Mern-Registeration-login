import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="homepage">
      <div
        className="banner_text contact_bg home_banner"
        style={{ backgroundImage: `url(contact.jpg)` }}
      >
        <div>
          <h1 className="heading text-center">Error 404</h1>
          <h2 className="heading text-center">Page Not found</h2>

          <div className="text-center mt-4">
            <Link to="/register" className="custom_btn btn_banner">
              Register now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
