import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { UserProfileContext } from '../contexts/UserProfileContext';
import { formatDistance } from 'date-fns';

const UserProfile = (props) => {
  const [userProfile, setUserProfile] = React.useContext(UserProfileContext);
  const [userInfo, setUserInfo] = React.useState({
    id: '',
    username: '',
    first_name: '',
    last_name: '',
    date_joined: '',
    email_address: '',
  });

  React.useEffect(() => {
    fetch('/API/user/?username=' + userProfile)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [userProfile]);

  return (
    <Container>
      <Header as="h2">{userInfo.username}</Header>
      <Header as="h3">
        {userInfo.first_name} {userInfo.last_name}
      </Header>
      <Header as="h3">{userInfo.email_address}</Header>
      <Header as="h3">
        Joined{' '}
        {userInfo.date_joined &&
          formatDistance(
            new Date(userInfo.date_joined * 1000),
            new Date()
          )}{' '}
        ago
      </Header>
    </Container>
  );
};

export default UserProfile;
