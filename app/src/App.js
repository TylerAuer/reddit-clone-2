import React, { useState, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { FEATURES } from './constants';
import { FeatureContext } from './contexts/FeatureContext';
import UserRead from './components/UserRead';
import UserCreate from './components/UserCreate';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Feed from './components/Feed';
import FormPostCreate from './components/FormPostCreate';
import FormPostEdit from './components/FormPostEdit';
import PostFull from './components/PostSingle';

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
        {feature === FEATURES.USER_CREATE && <UserCreate />}
        {feature === FEATURES.USER_READ && <UserRead />}
        {feature === FEATURES.POST_CREATE && <FormPostCreate />}
        {feature === FEATURES.POST_READ && <PostFull postID={activePost} />}
        {feature === FEATURES.POST_UPDATE && <FormPostEdit post={activePost} />}
      </section>
    </Container>
  );
}

export default App;
