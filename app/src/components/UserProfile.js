import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { formatDistance } from 'date-fns';
import { useParams } from 'react-router-dom';

const UserProfile = (props) => {
  const { userID } = useParams();
  const [userInfo, setUserInfo] = React.useState({
    id: '',
    username: '',
    first_name: '',
    last_name: '',
    date_joined: '',
    email_address: '',
  });

  React.useEffect(() => {
    fetch(`/API/user/id/${userID}`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [userID]);

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
