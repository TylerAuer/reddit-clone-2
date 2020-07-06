const getUserInfo = async (username, callback) => {
  await fetch('/API/user/?username=' + username).then((response) => {
    if (response.status === 200) {
      // Found user
      response.json().then((data) => callback(data));
    } else {
      // username not in DB
      alert('User not found');
      callback(false);
    }
  });
};

export default getUserInfo;
