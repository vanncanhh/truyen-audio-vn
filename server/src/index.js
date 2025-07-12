const express = require("express");
const app = express();
require("dotenv").config();
require("./config/database.config");

const PORT = process.env.PORT || 8080;
const route = require("./routers/api.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//Định tuyến router
route(app);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
