import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Feed from './components/Feed';
import FormPostCreate from './components/FormPostCreate';
import PostSingle from './components/PostSingle';
import UserUpdate from './components/UserUpdate';
import UserProfile from './components/UserProfile';
import Error404 from './components/Error404';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Container>
      <HashRouter>
        <NavBar />
        <section className="section-main">
          <Nav />
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/post/read/:postID" component={PostSingle} />
            <Route exact path="/post/create/" component={FormPostCreate} />
            <Route path="/profile/read/:userID" component={UserProfile} />
            <Route exact path="/profile/update/" component={UserUpdate} />
            <Route component={Error404} />
          </Switch>
        </section>
      </HashRouter>
    </Container>
  );
}

export default App;
