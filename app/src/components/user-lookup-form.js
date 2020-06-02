import React, { useState } from 'react';
import UserProfileBox from './user-profile-box';

const UserLookupForm = (props) => {
  const [userJSON, setUserJSON] = useState(null);
  const submit = (event) => {
    event.preventDefault();
    const inputUsername = event.target.elements['username'].value;
    console.log('/API/user/' + inputUsername);
    fetch('/API/user/' + inputUsername)
      .then((response) => response.json())
      .then((data) => {
        setUserJSON(data);
      });
  };

  return (
    <>
      <h2>Why not look up one of our highly valued users?</h2>
      <p>
        We'll do all the work, just type in their username. Don't worry about
        capitalizations. Do worry about everything else.
      </p>
      <form onSubmit={submit} id="formId">
        <label for="username">
          <b>Username: </b>
        </label>
        <input type="text" id="username" name="username" />{' '}
        <button type="submit">Look up user!</button>
      </form>
      <UserProfileBox userJSON={userJSON} />
    </>
  );
};

export default UserLookupForm;
