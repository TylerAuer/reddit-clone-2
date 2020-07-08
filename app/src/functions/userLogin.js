import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

const userLogin = async (username, callback) => {
  await fetch('/API/user/username/' + username).then((response) => {
    if (response.status === 200) {
      // Found user
      response.json().then((data) => {
        callback(data);
        toaster.notify(`Successfully logged in as ${data.username}`);
      });
    } else {
      // username not in DB
      alert('User not found');
      callback(false);
    }
  });
};

export default userLogin;
