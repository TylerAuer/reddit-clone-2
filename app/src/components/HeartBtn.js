import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import { LoginContext } from '../contexts/LoginContext';

const HeartBtn = ({ size, postInfo, setPostInfo }) => {
  const [login] = React.useContext(LoginContext);

  // Add heart API
  const addHeartAPICall = () => {
    fetch(`/api/heart/?userID=${login.id}&content_parent=${postInfo.id}`, {
      method: 'POST',
    }).then(() => {
      const newHearts = [...postInfo.hearts];
      newHearts.push(login.id);
      setPostInfo({
        ...postInfo,
        hearts: newHearts,
      });
    });
  };

  //Remove heart API
  const removeHeartAPICall = () => {
    fetch(`/api/heart/?userID=${login.id}&content_parent=${postInfo.id}`, {
      method: 'DELETE',
    }).then(() => {
      const newHearts = [...postInfo.hearts];
      newHearts.splice(newHearts.indexOf(login.id), 1);
      setPostInfo({
        ...postInfo,
        hearts: newHearts,
      });
    });
  };

  const UserHasNotHeartedBtn = () => {
    return (
      <Button onClick={addHeartAPICall} size={size}>
        <Icon name="heart outline" />
        {postInfo.hearts.length}
      </Button>
    );
  };

  const UserHasHeartedBtn = () => {
    return (
      <Button onClick={removeHeartAPICall} size={size} color="purple">
        <Icon name="heart" />
        {postInfo.hearts.length}
      </Button>
    );
  };

  return postInfo.hearts.includes(login.id) ? (
    <UserHasHeartedBtn />
  ) : (
    <UserHasNotHeartedBtn />
  );
};

export default HeartBtn;
