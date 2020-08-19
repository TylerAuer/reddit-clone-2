# Reddit Clone

A full-stack clone of Reddit with user authentication, posts, comments, and hearts.

## Technologies

### Backend

The backend is built with [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), and a [PostgreSQL](https://www.postgresql.org/) database. I used [Sequelize](https://sequelize.org/) to make interacting with Postgres easier. User authentication is handled by [Passport](http://www.passportjs.org/) with password hashing by [bcrypt](https://www.npmjs.com/package/bcrypt).

### Frontend

This is a [React](https://reactjs.org/) application that makes use of [React-Router](https://reactrouter.com/web/guides/quick-start) for routing and [Semantic-UI](https://react.semantic-ui.com/) for styling. I also used [Toasted-Notes](https://toasted-notes.netlify.app/) and [date-fns](https://www.npmjs.com/package/date-fns).

### Deployment

The site is hosted with [Heroku](https://www.heroku.com/home). Which makes maintenance efficient -- pushes to `master` automatically create new builds.

## Logical Next Features

- Comment nesting
- Hearts for comments
- Search of users and posts
- An algorithm for sorting feed based on a combination of hearts and recency

## What I've Learned

At the time, this was the first full-stack application I'd built. So, much of the backend patterns around routes and database queries were new to me. Since I didn't know what I didn't know, I made many early decision that later needed to be refactored, or rebuilt.

Since this project utilizes user authentication, I had to learn how to manage sessions and authenticate users.

This is the first full-stack project I've deployed so I had to learn to configure and maintain the application.

Because this application's frontend was larger than previous projects, I learned a lot about how to use (and effectively name) components to structure my project. There are still plenty of areas that could be abstracted or organized more effectively. For example, common API calls could be turned into custom React Hooks.

## To Run Locally

1. Clone repo
2. Run `npm install`
3. Start backend with `nodemon app.js`
4. Start frontend with `npm start`
5. Open app in browser (use local host port shown when you start the frontend)
6. Have fun!
