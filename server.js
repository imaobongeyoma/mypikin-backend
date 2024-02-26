require("dotenv").config();
const knex = require("knex")(require("./knexfile"));
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5050;
const providerRoutes = require("./routes/providerRoute");
const daycareRoutes = require("./routes/daycareRoute");
const authRoutes = require("./routes/authRoute");
const app = express();

//middlewares
app.use(cors({ origin: "http://localhost:3000", credentials: true })); 

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(cookieParser());

//file
app.use("/", express.static("./public/daycares"));
app.use("/", express.static("./public/profiles/"));
app.use("/public/daycares", express.static("./public/daycares"));
app.use("/public/profiles", express.static("./public/profiles/"));



//routes
app.use("/users", providerRoutes);
app.use("/auth", authRoutes);
app.use("/daycares", daycareRoutes);


app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);