import React from 'react';
import { Confirm, Button } from 'semantic-ui-react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

const DeleteUser = (props) => {
  const history = useHistory();
  const [login, setLogin] = React.useContext(LoginContext);
  const [openConfirm, setOpenConfirm] = React.useState(false);

  const open = () => {
    setOpenConfirm(true);
  };
  const close = () => {
    setOpenConfirm(false);
  };

  const onConfirmDeleteUser = () => {
    fetch('/API/user/?username=' + login.username + '&id=' + login.id, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          setLogin(false);
          toaster.notify('Your account has been removed from our system 😢');
          history.push('/');
        } else {
          toaster.notify(
            'An error occurred. We were unable to delete your account.'
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Button color="red" onClick={open}>
        Delete Your Account
      </Button>
      <Confirm
        open={openConfirm}
        onCancel={close}
        onConfirm={onConfirmDeleteUser}
        cancelButton="Wait! Don't delete me!"
        confirmButton="Yes, delete everything."
        header="Are you sure you want to delete your account?"
        content="This will also delete all of your posts and comments."
      />
    </>
  );
};

export default DeleteUser;
