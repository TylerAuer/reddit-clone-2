import React from 'react';
import FeedPostSingle from './FeedPostSingle';

const Feed = (props) => {
  const [postList, setPostList] = React.useState([]);

  // If there are conditions specified
  let queryString = '';
  if (Object.keys(props.conditions).length) {
    queryString += '?';
    for (const prop in props.conditions) {
      queryString += `${prop}=${props.conditions[prop]}&`;
    }
  }

  React.useEffect(() => {
    fetch(`/API/feed/options/${queryString}`).then((response) => {
      if (response.status === 200) {
        response.json().then((data) => setPostList(data));
      }
    });
  }, []);

  return postList.map((post) => (
    <FeedPostSingle
      key={post.id}
      onClickPost={props.onClickPost}
      postData={post}
    />
  ));
};

export default Feed;
