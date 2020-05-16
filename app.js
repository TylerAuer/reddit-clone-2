const Sequelize = require("sequelize");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// Connect to postgres DB
const sequelize = new Sequelize("reddit", "tylerauer", null, {
  host: "localhost",
  dialect: "postgres",
});

// Testing the connection to the postgres db
sequelize
  .authenticate() // sets up a connection
  .then(() => {
    // if and when the connection is successful
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    // if and when the connection fails
    console.error("Unable to connect to the database:", err);
  });
