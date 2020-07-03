// import React, { useState } from 'react';
// import UserProfileBox from './UserProfileBox';

// // TODO: Make this handle status(204) - No Content response
// const UserRead = (props) => {
//   const [userJSON, setUserJSON] = useState(null);

//   const submit = (event) => {
//     event.preventDefault();
//     const inputUsername = event.target.elements['username'].value;
//     fetch('/API/user/?username=' + inputUsername)
//       .then((response) => response.json())
//       .then((data) => {
//         setUserJSON(data);
//       });
//   };

//   return (
//     <div>
//       <h2>Why not look up one of our highly valued users?</h2>
//       <p>
//         We'll do all the work, just type in their username. Don't worry about
//         capitalizations. Do worry about everything else.
//       </p>
//       <form onSubmit={submit} id="formId">
//         <label htmlFor="username">
//           <b>Username: </b>
//         </label>
//         <input type="text" id="username" name="username" />{' '}
//         <button type="submit">Look up user!</button>
//       </form>
//       <UserProfileBox userJSON={userJSON} />
//     </div>
//   );
// };

// export default UserRead;
