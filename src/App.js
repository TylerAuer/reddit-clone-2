import React, { useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { LoginContext } from './contexts/LoginContext';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Feed from './components/Feed';
import PostSingle from './components/PostSingle';
import FormPostCreate from './components/FormPostCreate';
import UserProfile from './components/UserProfile';
import UserUpdate from './components/UserUpdate';
import SignUp from './components/SignUp';
import Error404 from './components/Error404';

// A wrapper for <Route> that redirects to the feed if not signed in
function PrivateRoute({ children, ...rest }) {
  const [login] = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={({ location }) => (login ? children : <Redirect to="/feed" />)}
    />
  );
}

function App() {
  return (
    <Container>
      <HashRouter>
        <NavBar />
        <section className="section-main">
          <Nav />
          <Route exact path="/">
            <Redirect to="/feed" />
          </Route>
          <Switch>
            <Route path="/feed" component={Feed} />
            <Route path="/post/read/:postID" component={PostSingle} />
            <PrivateRoute exact path="/post/create">
              <FormPostCreate />
            </PrivateRoute>
            <Route path="/profile/read/:userID" component={UserProfile} />
            <PrivateRoute exact path="/profile/update">
              <UserUpdate />
            </PrivateRoute>
            <Route exact path="/account/signup" component={SignUp} />
            <Route component={Error404} />
          </Switch>
        </section>
      </HashRouter>
    </Container>
  );
}

export default App;
