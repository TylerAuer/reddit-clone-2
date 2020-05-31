const express = require('express');
const routeHandlers = require('./routeHandlers');

// QUESTION: Should we install React with create-react-app for the frontend?

// App config
const app = express();
const port = 4000;

// Endpoints
app.get('/', routeHandlers.baseRouteHandler);
app.get('/API/user/:username', routeHandlers.userRouteHandler);
app.get('/API/user/', routeHandlers.userQueryRouteHandler);

// Where to set up the app to listen
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
