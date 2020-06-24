/*
Looks up a user in the DB based on their username
Passes the object to the given callback function, usually setSOMETHING
  {
    username: <string>,
    first_name: <string>,
    last_name: <string>,
    date_joined: <Epoch Time (sec not ms),
    email: <string>,

  }

Alerts and returns FALSE to callback
*/
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