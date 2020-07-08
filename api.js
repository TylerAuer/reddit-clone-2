const express = require('express');
const accountRoutes = require('./routes/accountRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const feedRoutes = require('./routes/feedRoutes');
const commentRoutes = require('./routes/commentRoutes');
const heartRoutes = require('./routes/heartRoutes');

///////////////////////////////////////////////
// APP CONFIG

const app = express();
app.use(express.json());
app.setMaxListeners(20); // Default: 10 (Helps spot emitter memory leaks)

const port = 4000;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

///////////////////////////////////////////////
// ENDPOINTS

// ACCOUNTS
app.post('/API/account/signin', accountRoutes.signIn);
// app.get('/API/account/signout', accountRoutes.signout);
// app.post('/API/account/create', userRoutes.makeNewUser);
// app.patch('/API/account/update', userRoutes.updateUserAccountInfo);
// app.delete('/API/account/delete', userRoutes.deleteUser);

// OLD USER METHODS BEING MOVED TO ACCOUNTS ROUTES
app.patch('/API/user/', userRoutes.updateUserAccountInfo);
app.post('/API/user/', userRoutes.makeNewUser);
app.delete('/API/user/', userRoutes.deleteUser);

// USERS
app.get('/API/user/id/:userID', userRoutes.getUserByID);
app.get('/API/user/username/:username', userRoutes.getUserByUsername);

// POSTS
app.get('/API/post/', postRoutes.readPost);
app.post('/API/post/', postRoutes.createNewPost);
app.patch('/API/post/', postRoutes.updatePost);
app.delete('/API/post/', postRoutes.deletePost);

// FEEDS
app.get('/API/feed/options/', feedRoutes.getFeedOfPostsByConditions);

// COMMENTS
app.post('/API/comment/', commentRoutes.createNewComment);
app.delete('/API/comment/', commentRoutes.deleteComment);

// HEART
app.post('/API/heart', heartRoutes.addHeart);
app.delete('/API/heart', heartRoutes.removeHeart);
