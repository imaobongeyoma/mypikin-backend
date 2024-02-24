const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const { db } = require("../connect.js");
const mysql = require("mysql2");
require("dotenv").config();

//register (signup)
const register = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");
    //CREATE A NEW USER

    const file = req.file;
    const q =
      "INSERT INTO users (`first_name`,`last_name`,`username`,`email`, `password`, `phone_number`, `profile_image`) VALUE (?)";

    const values = [
      req.body.first_name,
      req.body.last_name,
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.phone_number,
      file ? file.path : null,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

//login
const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    const userPassword = data[0].password;
    if (userPassword !== req.body.password)
      return res.status(400).json("Wrong password or username!");

    const token = jwt.sign({ id: data[0].id }, process.env.SECRET_KEY);
    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out.");
};

module.exports = {
  register,
  login,
  logout,
};
