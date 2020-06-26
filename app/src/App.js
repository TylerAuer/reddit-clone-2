import React, { useState, useContext } from 'react';
import { FEATURES } from './constants';
import { GlobalContextProvider } from './contexts/GlobalContext';
import { FeedConditionsContext } from './contexts/FeedConditionsContext';
import UserRead from './components/UserRead';
import UserCreate from './components/UserCreate';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Feed from './components/Feed';
import PostForm from './components/PostForm';
import PostFull from './components/PostFull';

function App() {
  const [activeFeature, setActiveFeature] = useState(FEATURES.FEED);
  const [activePost, setActivePost] = useState();
  const [feedConditions, setFeedConditions] = useContext(FeedConditionsContext);

  // onClick to load site features
  const mountUnmountFeature = (feature) => {
    activeFeature === feature ? setActiveFeature() : setActiveFeature(feature);
  };

  const onClickPost = (post) => {
    setActivePost(post);
    setActiveFeature(FEATURES.POST_READ);
  };

  return (
    <div>
      <NavBar />
      <section className="section-main">
        <h1>2 Reddit 2 Furious</h1>

        <Nav onClick={mountUnmountFeature} />

        {activeFeature === FEATURES.FEED && (
          <Feed conditions={feedConditions} onClickPost={onClickPost} />
        )}
        {activeFeature === FEATURES.USER_CREATE && <UserCreate />}
        {activeFeature === FEATURES.USER_READ && <UserRead />}
        {activeFeature === FEATURES.POST_CREATE && <PostForm />}
        {activeFeature === FEATURES.POST_READ && <PostFull post={activePost} />}
      </section>
    </div>
  );
}

export default App;
