const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

require("./database/connection");
app.use(express.json());
// const User = require("./modal/users");
app.use(require("./router/auth"));
app.use(cookieParser());

// app.get("/about", (req, res) => {
//   res.send(`About Page`);
// });

app.get("/contact", (req, res) => {
  res.cookie("jwtoken", "Cookie is Stored");
  res.send(`Contact Page`);
});

app.get("/register", (req, res) => {
  res.send(`Register Page`);
});

app.get("/login", (req, res) => {
  res.send(`Login Page`);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
