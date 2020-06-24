const getSinglePost = async (postID, callback) => {
  await fetch('/API/post/?postID=' + postID).then((response) => {
    if (response.status === 200) {
      // Found post
      response.json().then((data) => callback(data));
    } else {
      // postID not in the DB
      //alert('Post not found');
      callback(false);
    }
  });
};

export default getSinglePost;
