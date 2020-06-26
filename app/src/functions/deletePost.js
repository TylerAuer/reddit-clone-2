const deletePost = (postID) => {
  if (window.confirm('Are you sure you want to delete your post?')) {
    fetch(`/API/post/?postID=${postID}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => console.log(data));
  }
};

export default deletePost;
