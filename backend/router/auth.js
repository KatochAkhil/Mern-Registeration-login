const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");
require("../database/connection");
const User = require("../modal/users");

router.use(cookieParser());

router.get("/", (req, res) => {
  res.send(`Authentication Home Page`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password, work, confirmPassword } = req.body;

  if (!name || !email || !phone || !password || !work || !confirmPassword) {
    return res.status(422).json({ error: "Please fill the Missing field" });
  }
  try {
    const response = await User.findOne({ email: email });
    if (response) {
      return res.status(422).json({ error: "User already exist" });
    } else if (password != confirmPassword) {
      return res.status(422).json({ error: "Password Not matched" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        confirmPassword,
      });

      await user.save();
      res.status(201).json({ message: "User Registerd Successfully" });
    }
  } catch (err) {
    console.log("error");
  }
});

router.post("/signin", async (req, res) => {
  let token;
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "PLease fill the missing fields" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const ismatch = await bcrypt.compare(password, userLogin.password);

      token = userLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 1200000),
        httpOnly: true,
      });

      if (!ismatch) {
        return res.status(400).json({ error: "Invalid Credientials" });
      } else {
        res.status(201).json({ message: "User Login Successfully" });
      }
    } else {
      return res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch {
    console.log("Invalid Email/Password");
  }
});

// router.get("/about", authenticate, async (req, res) => {
//   res.send(req.rootUser);
// });
// router.get("/userdata", authenticate, async (req, res) => {
//   res.send(req.rootUser);
// });

// router.post("/contactform", async (req, res) => {
//   try {
//     const { name, email, phone, message } = req.body;
//     if (!name || !email || !phone || !message) {
//       console.log("error in contact");
//       return res.json({ error: "Fill The contact Form" });
//     }
//     const userContact = User.findOne({ _id: req.userID });
//   } catch (err) {
//     console.log(err);
//   }
// });
module.exports = router;
