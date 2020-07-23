# Reddit Clone

A full-stack clone of Reddit with user authentication, posts, comment, and hearts.

## Technologies

### Backend

The backend is built with [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), and a [PostgreSQL](https://www.postgresql.org/) database. I used [Sequelize](https://sequelize.org/) to make interacting with postgres easier. User authentication is handled by [Passport JS](http://www.passportjs.org/) with password hashing by [bcrypt](https://www.npmjs.com/package/bcrypt).

### Frontend

This is a [React](https://reactjs.org/) application that makes use of [React-Router](https://reactrouter.com/web/guides/quick-start) for routing and [Semantic-UI](https://react.semantic-ui.com/) for styling. I also used [Toasted-Notes](https://toasted-notes.netlify.app/) and [date-fns](https://www.npmjs.com/package/date-fns).

### Hosting

The site is hosted with [Amazon Web Services](https://aws.amazon.com/)'s Lightsail service using (Docker)[https://www.docker.com/].

## Logical Next Features

- Comment nesting
- Hearts for comments
- Search users and posts
- An algorithm for sorting feed based on combination of hearts and recency

## What I've Learned

At the time, this was the first full-stack application I'd built. So, much of the backend patterns around routes and database queries were new to me. Since I didn't know what I didn't know, I made many early decision that later needed to be refactored, rebuilt, or worked around.

Since this project utilizes user authentication, I had to learn how to manage sessions and authenticate users.

The backend and database are hosted with Amazon Web Services, so I had to learn how to configure the project there and to use Docker.

Because this application's frontend was larger than previous projects, I learned a lot about how to use (and name) components to structure my project. There are still plenty of areas that could be abstracted or organized more effectively. For example, API calls could be turned into custom React Hooks.
