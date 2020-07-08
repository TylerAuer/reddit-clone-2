import React, { useState, useContext } from 'react';
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
  const [activePost] = useState();

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
            <PostSingle postID={activePost} />
          </Route>
          <Route path="/post/new/:postID">
            <FormPostCreate />
          </Route>

          <Route path="/profile/read/:userID">
            <UserProfile />
          </Route>
          <Route path="/profile/update/:userID">
            <UserUpdate />
          </Route>
        </section>
      </HashRouter>
    </Container>
  );
}

export default App;

// REMOVE
// EXAMPLE FROM UDEMY
//
// const PageOne = () => {
//   return <div>PageOne</div>;
// };

// const PageTwo = () => {
//   return <div>PageTwo</div>;
// };

// const App = () => {
//   return (
//     <div>
//       <HashRouter>
//        <div>
//          <Route path="/" exact component={PageOne} />
//          <Route path="/pagetwo" component={PageTwo} />
//        </div>
//       </HashRouter>
//     </div>
//   )
// };
