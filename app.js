const express = require('express');
const routeHandlers = require('./routeHandlers');
const usersAPI = require('./api/users');

// App set up
const app = express();
const port = 3000;

// app.get is a "route"
app.get('/', routeHandlers.baseRouteHandler);
app.get('/tyler', routeHandlers.tylerRouteHandler);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

(async () => {
  // await usersAPI.addUser(
  //   "JessyFresh",
  //   "Jessica",
  //   "Auer",
  //   "fakeJBird@gmail.com"
  // );

  console.log(await usersAPI.readUser('JessyFresh'));
  await usersAPI.readUser('Prestoneous');
})();
