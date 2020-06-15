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

Returns null when user is not found
*/

// TODO: Pass a callback function reference the appropriate setWHATEVER method
// for the Component that is using this function
// Instead of returning the object, just set the state to force a rerender
const getUserInfo = async (username, callback) => {
  let userData = await fetch('/API/user/?username=' + username).then(
    (response) => {
      if (response.status === 200) {
        // Found user
        response.json().then((data) => callback(data));
      } else {
        // username not in DB
        callback(null);
      }
    }
  );
  return userData;
};

export default getUserInfo;
