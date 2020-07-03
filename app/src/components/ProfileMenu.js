// import React from 'react';
// import { Container, List, Button, Modal } from 'semantic-ui-react';
// import { FEATURES } from '../constants';
// import { LoginContext } from '../contexts/LoginContext';
// import { FeedContext } from '../contexts/FeedContext';
// import { FeatureContext } from '../contexts/FeatureContext';
// import deleteUser from '../functions/deleteUser';

// const ProfileMenu = (props) => {
//   const [loginState, setLoginState] = React.useContext(LoginContext);
//   const [, setFeed] = React.useContext(FeedContext);
//   const [, setFeature] = React.useContext(FeatureContext);
//   const [modalOpen, setModalOpen] = React.useState(false);

//   const handleOpen = () => setModalOpen(true);
//   const handleClose = () => setModalOpen(false);

//   return (
//     <Modal
//       trigger={
//         <Button animated floated="right" onClick={handleOpen}>
//           <Button.Content visible>{loginState.username}</Button.Content>
//           <Button.Content hidden>Account</Button.Content>
//         </Button>
//       }
//       open={modalOpen}
//       onClose={handleClose}
//       centered={false}
//       size="mini"
//       closeIcon
//     >
//       <Modal.Header>Profile Actions</Modal.Header>
//       <Modal.Content>
//         <List>
//           <List.Item
//             onClick={() => {
//               setLoginState(false);
//               handleClose();
//             }}
//           >
//             Logout
//           </List.Item>
//           <List.Item
//             onClick={() => {
//               setFeature(FEATURES.USER_UPDATE);
//               handleClose();
//             }}
//           >
//             Change user info
//           </List.Item>
//           <List.Item
//             onClick={() => {
//               setFeed({ authorID: loginState.id });
//               setFeature(FEATURES.FEED);
//               handleClose();
//             }}
//           >
//             See all your posts
//           </List.Item>
//           <List.Item
//             onClick={() => {
//               deleteUser(loginState.username, setLoginState);
//               handleClose();
//             }}
//           >
//             Delete account
//           </List.Item>
//         </List>
//       </Modal.Content>
//     </Modal>
//   );
// };

// export default ProfileMenu;
