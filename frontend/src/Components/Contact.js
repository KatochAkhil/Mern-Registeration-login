import React, { useState, useEffect } from "react";

function Contact(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactdata = async () => {
    try {
      const res = await fetch("/userdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUserData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    contactdata();
  }, []);

  const handleInput = (e) => {
    const name = e.terget.name;
    const value = e.terget.value;
    setUserData({ ...userData, [name]: value });
  };
  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, message, phone } = userData;
    const res = await fetch("/contactform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        phone,
      }),
    });
    const data = await res.json();
    if (!data) {
      console.log("message Not sent");
    } else {
      alert("Sent Successfull");
      setUserData({ userData: "" });
    }
    console.log(data);
  };

  return (
    <div className="contact_page ">
      <div className="container">
        <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div
                  className="main_box contact_bg"
                  style={{ backgroundImage: `url(contact.jpg)` }}
                >
                  <form method="POST">
                    <h2 className="heading">Contact Us</h2>
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <input
                          type="text"
                          name="name"
                          value={userData.name}
                          placeholder="Name"
                          className="form-control"
                          id="name"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-md-6 col-12">
                        <input
                          type="number"
                          name="phone"
                          value={userData.phone}
                          placeholder="Phone Number"
                          className="form-control"
                          id="name"
                          autoComplete="off"
                        />
                      </div>

                      <div className="col-12 mt-4">
                        <input
                          type="email"
                          name="email"
                          value={userData.email}
                          placeholder="Email"
                          className="form-control"
                          id="name"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-12 mt-4">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                          id="message"
                        ></textarea>
                      </div>
                      <div className="col-md-12 text-center mt-4">
                        <input
                          type="submit"
                          name="signup"
                          className="custom_btn"
                          id="signup"
                          value="Contact"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
