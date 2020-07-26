const createComment = (creator, contentParent, commentBody) => {
  fetch('/API/comment/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      creator: creator,
      content_parent: contentParent,
      commentBody: commentBody, // Should be object to match post
    }),
  })
    .then((response) => response.text())
    .then((data) => console.log(data));
};

export default createComment;
