const { Sequelize } = require('sequelize');
const models = require('../models');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Helpful user authentication with Passport.js example
// https://github.com/stribny/auth-quickstart
// This file was adapted from Stribny's example

module.exports = function (app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const user = await models.user.findOne({
        where: {
          username: {
            [Sequelize.Op.iLike]: username, // iLike makes case-insensitive
          },
        },
      });

      if (user == null) {
        return done(null, false, { message: 'Username not found' });
      }

      // compare password to hash from DB
      const isCorrectPassword = await bcrypt.compare(password, user.password);

      if (isCorrectPassword) {
        return done(null, user);
      }

      return done(null, false, { message: 'Incorrect password' });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    models.user
      .findOne({
        where: {
          id: id,
        },
      })
      .then((user) => {
        if (user == null) {
          done(new Error('Wrong user id.'));
        }

        done(null, user);
      });
  });
};
