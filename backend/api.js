const express = require('express');
const setupPassport = require('./passport/setupPassport');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jsonParser = bodyParser.json();
const accountRoutes = require('./routes/accountRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const feedRoutes = require('./routes/feedRoutes');
const commentRoutes = require('./routes/commentRoutes');
const heartRoutes = require('./routes/heartRoutes');
require('dotenv').config();

///////////////////////////////////////////////
// APP CONFIG

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.COOKIE_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 24 hours in milliseconds
  })
);
app.use(jsonParser);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.setMaxListeners(20); // Default: 10 (Helps spot emitter memory leaks)

///////////////////////////////////////////////
// PASSPORT CONFIG

setupPassport(app);

// AUTHENTICATION MIDDLEWARE
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
};

///////////////////////////////////////////////
// ENDPOINTS

// ACCOUNTS
app.post(
  '/API/account/signin',
  passport.authenticate('local'),
  accountRoutes.signIn
);
app.post(
  '/API/account/create',
  accountRoutes.signUp,
  passport.authenticate('local'),
  accountRoutes.signIn
);
app.get('/API/account/signout', isAuthenticated, accountRoutes.signOut);
app.patch('/API/account/update', isAuthenticated, accountRoutes.updateAccount);
//app.delete('/API/account/delete', isAuthenticated, accountRoutes.deleteAccount);

// OLD USER METHODS BEING MOVED TO ACCOUNTS ROUTES
//app.patch('/API/user/', isAuthenticated, userRoutes.updateUserAccountInfo);
//app.delete('/API/user/', isAuthenticated, userRoutes.deleteUser);

// USERS
app.get('/API/user/id/:userID', userRoutes.getUserByID);
app.get(
  '/API/user/content/:userID',
  userRoutes.getPostCommentAndHeartDataForUser
);
app.get('/API/user/username/:username', userRoutes.getUserByUsername);

// POSTS
app.get('/API/post/', postRoutes.readPost);
app.post('/API/post/', isAuthenticated, postRoutes.createNewPost);
app.patch('/API/post/', isAuthenticated, postRoutes.updatePost);
app.delete('/API/post/', isAuthenticated, postRoutes.deletePost);

// FEEDS
app.get('/API/feed/', feedRoutes.getFeedOfPostsByConditions);

// COMMENTS
app.post('/API/comment/', isAuthenticated, commentRoutes.createNewComment);
app.delete('/API/comment/', isAuthenticated, commentRoutes.deleteComment);

// HEART
app.post('/API/heart', isAuthenticated, heartRoutes.addHeart);
app.delete('/API/heart', isAuthenticated, heartRoutes.removeHeart);

///////////////////////////////////////////////
// SPIN UP

const port = 4000;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
