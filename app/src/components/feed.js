import React from 'react';
import { FeedConditionsContext } from '../contexts/FeedConditionsContext';
import truncate from '../functions/truncate';

const FeedPostSingle = (props) => {
  const post = (
    <div className="post">
      <h2 onClick={() => props.onClickPost(props.postData)}>
        {props.postData.title}
      </h2>
      <div>By: {props.postData.author_username}</div>
      <p>{truncate(props.postData.body, 150)}</p>
    </div>
  );

  return props.postData ? post : <div>Post loading...</div>;
};

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
  }, [queryString]);

  return postList.map((post) => (
    <FeedPostSingle
      key={post.id}
      onClickPost={props.onClickPost}
      postData={post}
    />
  ));
};

export default Feed;
