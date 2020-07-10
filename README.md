# Reddit Clone

A full-stack clone of Reddit with user authentication, posts, comment, and hearts.

## Technologies

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [React](https://reactjs.org/)
- [React-Router](https://reactrouter.com/web/guides/quick-start)
- [Semantic-UI](https://react.semantic-ui.com/)
- [Toasted-Notes](https://toasted-notes.netlify.app/)
- [GitHub Pages](https://pages.github.com/)
- [Amazon Web Services](https://aws.amazon.com/)

## Logical Next Features

- Comment nesting and hearts for comments
- Search users and posts
- An algorithm for sorting feed based on combination of hearts and recency

## What I've Learned

At the time, this was the first full-stack application I'd built. So, much of the backend patterns around routes and database queries were new to me. Since I didn't know what I didn't know, I made many early decision that later needed to be refactored, rebuilt, or worked around.

Since this project utilizes user authentication, I had to learn how to manage sessions and authenticate users.

The backend and database are hosted with Amazon Web Services, so I had to learn how to configure the project there.

Because this application's frontend was larger than previous projects, I learned a lot about how to use components to structure my project. There are still plenty of areas that could be abstracted or organized more effectively. For example, API calls could be turned into custom React Hooks.
