const deleteUser = async (username, setLoginContextCallback) => {
  if (window.confirm(`Are you sure you want to delete ${username}`)) {
    // Delete account API call here
    fetch('/API/user/?username=' + username, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          setLoginContextCallback(false);
          alert('Account was deleted');
        } else {
          // username not in DB
          alert('Error occured. Account was not deleted');
        }
      })
      .catch((error) => console.log(error));
  }
};

export default deleteUser;
