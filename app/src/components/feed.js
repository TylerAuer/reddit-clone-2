import React from 'react';
import { FeedContext } from '../contexts/FeedContext';
import truncate from '../functions/truncate';

const FeedPostSingle = (props) => {
  const post = (
    <div className="post">
      <h2 onClick={() => props.onClickPost(props.postData.id)}>
        {props.postData.title}
      </h2>
      <div>By: {props.postData.author_username}</div>
      <p>{truncate(props.postData.body, 150)}</p>
    </div>
  );

  return props.postData ? post : <div>Post loading...</div>;
};

const Feed = (props) => {
  const [feed] = React.useContext(FeedContext);
  const [postList, setPostList] = React.useState([]);

  // If there are conditions specified for the feed
  // build a query string
  let queryString = '';
  if (Object.keys(feed).length) {
    queryString += '?';
    for (const prop in feed) {
      queryString += `${prop}=${feed[prop]}&`;
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
