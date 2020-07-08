const express = require('express');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const feedRoutes = require('./routes/feedRoutes');
const commentRoutes = require('./routes/commentRoutes');
const heartRoutes = require('./routes/heartRoutes');

// App config
const app = express();
app.use(express.json());

const port = 4000;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

////////////////////////////////////
// ENDPOINTS

// Index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/public/index.html'));
});

// ACCOUNT
// app.get('/API/account/signin', accountRoutes.signin);
// app.get('/API/account/signout', accountRoutes.signout);
// app.post('/API/account/create', userRoutes.makeNewUser);
// app.patch('/API/account/update', userRoutes.updateUserAccountInfo);
// app.delete('/API/account/delete', userRoutes.deleteUser);

// USERS
// app.get('/API/user/id/', userRoutes.getUserByID);
// app.get('/API/user/username/', userRoutes.getUserByID);

// USERS
app.patch('/API/user/', userRoutes.updateUserAccountInfo);
app.get('/API/user/', userRoutes.getUserByID);
app.post('/API/user/', userRoutes.makeNewUser);
app.delete('/API/user/', userRoutes.deleteUser);

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
