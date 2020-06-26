import React from 'react';
import FeedPostSingle from './FeedPostSingle';

const Feed = (props) => {
  const [postList, setPostList] = React.useState([]);

  React.useEffect(() => {
    fetch('/API/feed/all/').then((response) => {
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
