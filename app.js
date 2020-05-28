const { Sequelize, Model, DataTypes } = require("sequelize");
const express = require("express");
const routeHandlers = require("./routeHandlers");
// Models
const user = require("./models/user");
// App set up
const app = express();
const port = 3000;

// Connect to postgres DB
const sequelize = new Sequelize("reddit", "tylerauer", null, {
  host: "localhost",
  dialect: "postgres",
});

// app.get is a "route"
app.get("/", routeHandlers.baseRouteHandler);
app.get("/tyler", routeHandlers.tylerRouteHandler);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// Adds new user to DB
const addUser = (username, first_name, last_name, email_address) => {
  const newUser = user(sequelize, DataTypes).create({
    username: username,
    first_name: first_name,
    last_name: last_name,
    date_joined: Math.round(Date.now() / 1000), // rounded to the second
    email_address: email_address,
  });
  console.log("Added new user to the database!");
};

// Adds two users to the DB
(async () => {
  await addUser("Prestoneous", "Tyler", "Auer", "fakeTyler@gmail.com");
  await addUser("Joshy", "Josh", "Cantor", "fakeJosh@gmail.com");
})();
