const express = require('express');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

// QUESTION: Should we install React with create-react-app for the frontend?

// App config
const app = express();
const port = 4000;

///////////////
// ENDPOINTS //
///////////////

// Index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/public/index.html'));
});

// USERS
app.get('/API/user/', userRoutes.getUserInfoByUsername);
app.post('/API/user/', userRoutes.makeNewUser);
app.patch('/API/user/', userRoutes.updateUserAccountInfo);
app.delete('/API/user/', userRoutes.deleteUser);

// Posts
//app.get('/API/post/', postRoutes.getPostInfo);
app.post('/API/post/', postRoutes.createNewPost);
//app.patch('/API/post/', postRoutes.updatePost);
//app.delete('/API/post/', postRoutes.deletePost);

// Where to set up the app to listen
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
