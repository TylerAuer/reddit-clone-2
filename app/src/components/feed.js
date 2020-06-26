import React from 'react';
import { FeedConditionsContext } from '../contexts/FeedConditionsContext';
import FeedPostSingle from './FeedPostSingle';

const Feed = (props) => {
  const [feedConditions] = React.useContext(FeedConditionsContext);
  const [postList, setPostList] = React.useState([]);

  // If there are conditions specified for the feed
  // build a query string
  let queryString = '';
  if (Object.keys(feedConditions).length) {
    queryString += '?';
    for (const prop in feedConditions) {
      queryString += `${prop}=${feedConditions[prop]}&`;
    }
  }

  React.useEffect(() => {
    fetch(`/API/feed/options/${queryString}`).then((response) => {
      if (response.status === 200) {
        response.json().then((data) => setPostList(data));
      }
    });
  }, [feedConditions]);

  return postList.map((post) => (
    <FeedPostSingle
      key={post.id}
      onClickPost={props.onClickPost}
      postData={post}
    />
  ));
};

export default Feed;
