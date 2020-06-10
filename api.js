const express = require('express');
const routeHandlers = require('./routeHandlers');

// QUESTION: Should we install React with create-react-app for the frontend?

// App config
const app = express();
const port = 4000;

///////////////
// ENDPOINTS //
///////////////
// Index
app.get('/', routeHandlers.base);

// USERS
app.get('/API/user/', routeHandlers.userGet);
app.post('/API/user/', routeHandlers.userPost);

// Where to set up the app to listen
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
