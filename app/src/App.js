import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const submit = (event) => {
    event.preventDefault();
    const inputUsername = event.target.elements['username'].value;
    fetch('/API/user/' + inputUsername)
      .then((response) => response.json())
      .then((data) => {
        const userDataDisplay = document.getElementById('user-data');
        // data is now the object I designed.
        // it can be processed like any object into whatever html I want
        // process it here
      });
  };

  return (
    <div>
      <h1>Reddit 2</h1>
      <p>
        Welcome to Reddit 2. It's reddit but without all that annoying stuff you
        like!
      </p>
      <h2>Why not look up one of our highly valued users?</h2>
      <p>
        We'll do all the work, just type in their username. Don't worry about
        capitalizations. Do worry about everything else.
      </p>
      <form onSubmit={submit} id="formId">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
        <button type="submit">Look up user!</button>
      </form>
    </div>
  );
}

export default App;
