import React from 'react';
import PostSingle from './PostSingle';

const Feed = (props) => {
  const [postList, setPostList] = React.useState([]);

  React.useEffect(() => {
    fetch('/API/feed/all/').then((response) => {
      if (response.status === 200) {
        response.json().then((data) => setPostList(data));
      }
    });
  }, []); // Only make API call if postID changes

  return postList.map((post) => <PostSingle postData={post} />);
};

export default Feed;
