const express = require('express');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const feedRoutes = require('./routes/feedRoutes');

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

// USERS
app.get('/API/user/', userRoutes.getUserInfoByUsername);
app.post('/API/user/', userRoutes.makeNewUser);
app.patch('/API/user/', userRoutes.updateUserAccountInfo);
app.delete('/API/user/', userRoutes.deleteUser);

// POSTS
app.get('/API/post/', postRoutes.readSinglePost);
app.post('/API/post/', postRoutes.createNewPost);
//app.patch('/API/post/', postRoutes.updatePost);
//app.delete('/API/post/', postRoutes.deletePost);

// FEEDS
app.get('/API/feed/options/', feedRoutes.getFeedOfPostsByConditions);
//app.get('/API/feed/date/', feedRoutes.NAME);
//app.get('/API/feed/sorted/', feedRoutes.NAME);
