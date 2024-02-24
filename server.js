require("dotenv").config();
const knex = require("knex")(require("./knexfile"));
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true })); 

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(cookieParser());


app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);