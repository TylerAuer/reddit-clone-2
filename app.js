const express = require('express');
const routeHandlers = require('./routeHandlers');

// App config
const app = express();
const port = 3000;

// List of endpoints
app.get('/', routeHandlers.baseRouteHandler);
app.get('/API/user/:username', routeHandlers.userRouteHandler);

// Where to set up the app to listen
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
