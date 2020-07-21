import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

const accountSignIn = async (username, password, callback) => {
  await fetch('/API/account/signin/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  }).then((response) => {
    if (response.status === 200) {
      // Found user
      response.json().then((data) => {
        callback(data);
        toaster.notify(`Successfully logged in as ${data.username}`);
      });
    } else {
      callback(false);
      toaster.notify(
        `Unable to sign in ${username}. Username and password combination are incorrect`
      );
    }
  });
};

export default accountSignIn;
