import React, { useState, useContext } from 'react';
import { FEATURES } from './constants';
import { ActiveFeatureContext } from './contexts/ActiveFeatureContext';
import UserRead from './components/UserRead';
import UserCreate from './components/UserCreate';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Feed from './components/Feed';
import FormPostCreate from './components/FormPostCreate';
import PostFormEdit from './components/PostFormEdit';
import PostFull from './components/PostFull';

function App() {
  const [activeFeature, setActiveFeature] = useContext(ActiveFeatureContext);
  const [activePost, setActivePost] = useState();

  const onClickPost = (post) => {
    setActivePost(post);
    setActiveFeature(FEATURES.POST_READ);
  };

  return (
    <div>
      <NavBar />
      <section className="section-main">
        <h1>2 Reddit 2 Furious</h1>
        <Nav />
        {activeFeature === FEATURES.FEED && <Feed onClickPost={onClickPost} />}
        {activeFeature === FEATURES.USER_CREATE && <UserCreate />}
        {activeFeature === FEATURES.USER_READ && <UserRead />}
        {activeFeature === FEATURES.POST_CREATE && <FormPostCreate />}
        {activeFeature === FEATURES.POST_READ && <PostFull post={activePost} />}
        {activeFeature === FEATURES.POST_UPDATE && (
          <PostFormEdit post={activePost} />
        )}
      </section>
    </div>
  );
}

export default App;
