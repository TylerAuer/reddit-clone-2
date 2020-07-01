// import React, { useState } from 'react';

// const UserCreate = (props) => {
//   const [responseMsg, setResponseMsg] = useState(null);

//   // TODO:  Have the username query the DB live as the
//   // person types checking if the username is taken
//   // TODO: Make the response an alert
//   const Response = <div>{responseMsg}</div>;
//   const submit = (event) => {
//     event.preventDefault();
//     const elems = event.target.elements;
//     const username = '?username=' + elems['username'].value;
//     const first = '&first=' + elems['first'].value;
//     const last = '&last=' + elems['last'].value;
//     const email = '&email=' + elems['email'].value;
//     const queryString = username + first + last + email;

//     //TODO: Add a .catch()
//     fetch('/API/user/' + queryString, {
//       method: 'POST',
//     })
//       .then((response) => response.text())
//       .then((data) => setResponseMsg(data));
//     // This was helpful: https://developer.mozilla.org/en-US/docs/Web/API/Body
//   };

//   return (
//     <div>
//       <h2>Hey, you look new!</h2>
//       <p>Why don't you make yourself right at home and become a user!</p>
//       <form onSubmit={submit} id="formId">
//         <label htmlFor="username">
//           <b>Username: </b>
//         </label>
//         <input type="text" id="username" name="username" /> <br />
//         <label htmlFor="first">
//           <b>First Name: </b>
//         </label>
//         <input type="text" id="first" name="first" /> <br />
//         <label htmlFor="last">
//           <b>Last Name: </b>
//         </label>
//         <input type="text" id="last" name="last" /> <br />
//         <label htmlFor="email">
//           <b>Email: </b>
//         </label>
//         <input type="email" id="email" name="email" /> <br />
//         <button type="submit">Join Reddit 2</button>
//       </form>
//       {responseMsg && Response}
//     </div>
//   );
// };

// export default UserCreate;
