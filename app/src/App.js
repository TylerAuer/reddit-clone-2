import React, { useState, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { FEATURES } from './constants';
import { FeatureContext } from './contexts/FeatureContext';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Feed from './components/Feed';
import FormPostCreate from './components/FormPostCreate';
import PostFull from './components/PostSingle';
import UserUpdate from './components/UserUpdate';
import UserProfile from './components/UserProfile';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  const [feature, setFeature] = useContext(FeatureContext);
  const [activePost, setActivePost] = useState();

  const onClickPost = (postID) => {
    setActivePost(postID);
    setFeature(FEATURES.POST_READ);
  };

  return (
    <Container>
      <HashRouter>
        <NavBar />
        <section className="section-main">
          <Nav />
          <Route path="/" exact>
            <Feed onClickPost={onClickPost} />
          </Route>
          <Route path="/profile/read">
            <UserProfile />
          </Route>
          <Route path="/post/new">
            <FormPostCreate />
          </Route>
          <Route path="/post/read">
            <PostFull postID={activePost} />
          </Route>
          <Route path="/profile/update">
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
