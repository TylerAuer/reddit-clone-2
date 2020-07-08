import React from 'react';
import getSinglePost from '../functions/getSinglePost';
import FormPostEdit from './FormPostEdit';
import PostDisplay from './PostDisplay';
import { useParams } from 'react-router-dom';

const PostFull = (props) => {
  const [editMode, setEditMode] = React.useState(false);
  const [showAddCommentForm, setShowAddCommentForm] = React.useState(false);
  const { postID } = useParams();
  const [postInfo, setPostInfo] = React.useState({
    id: '',
    author: '',
    title: '',
    body: '',
    createdAt: '',
    updatedAt: '',
    comments: [],
    hearts: [],
  });

  React.useEffect(() => {
    getSinglePost(postID, setPostInfo);
  }, [postID, editMode, showAddCommentForm]);

  const viewPost = (
    <PostDisplay
      setEditMode={setEditMode}
      setPostInfo={setPostInfo}
      setShowAddCommentForm={setShowAddCommentForm}
      showAddCommentForm={showAddCommentForm}
      postInfo={postInfo}
    />
  );

  const editPost = (
    <FormPostEdit setEditMode={setEditMode} postInfo={postInfo} />
  );

  return editMode ? editPost : viewPost;
};

export default PostFull;
