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

function App() {
  const [feature, setFeature] = useContext(FeatureContext);
  const [activePost, setActivePost] = useState();

  const onClickPost = (postID) => {
    setActivePost(postID);
    setFeature(FEATURES.POST_READ);
  };

  return (
    <Container>
      <NavBar />
      <section className="section-main">
        <Nav />
        {feature === FEATURES.FEED && <Feed onClickPost={onClickPost} />}
        {feature === FEATURES.USER_READ && <UserProfile />}
        {feature === FEATURES.POST_CREATE && <FormPostCreate />}
        {feature === FEATURES.POST_READ && <PostFull postID={activePost} />}
        {feature === FEATURES.USER_UPDATE && <UserUpdate />}
      </section>
    </Container>
  );
}

export default App;
