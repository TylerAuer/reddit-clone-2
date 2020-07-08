import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Feed from './components/Feed';
import FormPostCreate from './components/FormPostCreate';
import PostSingle from './components/PostSingle';
import UserUpdate from './components/UserUpdate';
import UserProfile from './components/UserProfile';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <HashRouter>
        <NavBar />
        <section className="section-main">
          <Nav />

          <Route path="/" exact>
            <Feed />
          </Route>

          <Route path="/post/read/:postID">
            <PostSingle />
          </Route>
          <Route path="/post/create/">
            <FormPostCreate />
          </Route>

          <Route path="/profile/read/:userID">
            <UserProfile />
          </Route>
          <Route path="/profile/update/">
            <UserUpdate />
          </Route>
        </section>
      </HashRouter>
    </Container>
  );
}

export default App;
