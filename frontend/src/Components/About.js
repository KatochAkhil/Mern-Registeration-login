import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  const [tabs, settabs] = useState(1);

  return (
    <div
      className="main_box contact_bg"
      style={{ backgroundImage: `url(aboutbanner.jpg)` }}
    >
      <form method="GET">
        <div className="row">
          <div className="col-md-6">
            <img src="about.jpg" className="w-100" alt="about_image" />
          </div>
          <div className="col-md-6">
            <div className="text_about">
              <h2 className="heading">Admin</h2>
              <h6 className="heading">Web Developer</h6>
              <p>
                Ranking <span>1/10</span>
              </p>
              <div className="tabs_costom">
                <div className="tabs_header">
                  <button
                    onClick={() => {
                      settabs(1);
                    }}
                    className={tabs === 1 ? "active_btn" : "notactive"}
                  >
                    About
                  </button>
                  <button
                    onClick={() => {
                      settabs(2);
                    }}
                    className={tabs === 2 ? "active_btn" : "notactive"}
                  >
                    Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-2">
            <button className="custom_btn">Edit Profile</button>
          </div> */}
          <div className="col-md-4 mt-4">
            <div className="links">
              <h6 className="heading">Personal Links</h6>
              <a href="#" className="custom_link">
                Instagram
              </a>
              <a href="#" className="custom_link">
                Youtube
              </a>
              <a href="#" className="custom_link">
                facebook
              </a>
              <a href="#" className="custom_link">
                Twitter
              </a>
              <a href="#" className="custom_link">
                Linkdin
              </a>
            </div>
          </div>
          <div className="col-md-8 mt-4">
            <div className={tabs === 1 ? "tabs" : "d-none"}>
              <div className="row">
                <div className="col-md-6">
                  <div className="list_heading">
                    <p>Name</p>
                    <p>Email</p>
                    <p>Phone</p>
                    <p>Profession</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list_content">
                    <p>Name</p>
                    <p>Email</p>
                    <p>Phone</p>
                    <p>Profession</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={tabs === 2 ? "tabs" : "d-none"}>
              <div className="row">
                <div className="col-md-6">
                  <div className="list_heading">
                    <p>Experience</p>
                    <p>Hourly Rate</p>
                    <p>Totsl Projects</p>
                    <p>English Level</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list_content">
                    <p>Name</p>
                    <p>Email</p>
                    <p>Phone</p>
                    <p>Profession</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default About;
