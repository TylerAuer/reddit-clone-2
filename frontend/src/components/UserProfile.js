import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Divider,
  Icon,
  Label,
  List,
} from 'semantic-ui-react';
import { formatDistance } from 'date-fns';
import { useParams } from 'react-router-dom';
import { useTrail, animated } from 'react-spring';

const UserProfile = (props) => {
  const { userID } = useParams();
  const [info, setInfo] = React.useState({
    comment_count: 0,
    heart_count: 0,
    posts: [],
    user_info: {},
  });

  React.useEffect(() => {
    fetch(`/API/user/content/${userID}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      });
  }, [userID]);

  const trail = useTrail(info.posts.length, {
    from: { marginLeft: -10, opacity: 0 },
    to: { marginLeft: 0, opacity: 1 },
  });

  const AnimatedList = animated(List.Item);

  // const PostList = info.posts.map((post) => {
  const PostList = trail.map((props, index) => {
    return (
      <AnimatedList style={props} key={info.posts[index].id}>
        <List.Icon name="newspaper outline" verticalAlign="middle" />
        <List.Content>
          <List.Header>
            <Link to={`/post/read/${info.posts[index].id}`}>
              {info.posts[index].post_title}
            </Link>
          </List.Header>
          <List.Description>
            <span className="profile__post-date">
              {formatDistance(
                new Date(info.posts[index].updatedAt),
                new Date()
              )}{' '}
              ago
            </span>
          </List.Description>
        </List.Content>
      </AnimatedList>
    );
  });

  return (
    <Container>
      <Header as="h2">
        {info.user_info.username}{' '}
        <span className="profile__join-date">
          Joined{' '}
          {info.user_info.date_joined &&
            formatDistance(
              new Date(info.user_info.date_joined * 1000),
              new Date()
            )}{' '}
          ago
        </span>
        <Header.Subheader>Account Information</Header.Subheader>
      </Header>
      <p>
        {info.user_info.first_name} {info.user_info.last_name} |{' '}
        {info.user_info.email_address}
      </p>
      <Label>
        <Icon name="comment" />
        {info.comment_count}
      </Label>
      <Label>
        <Icon name="heart" />
        {info.heart_count}
      </Label>
      <Divider />
      <Header as="h3">{info.user_info.username}'s Posts</Header>
      <List size="large" relaxed="very">
        {PostList}
      </List>
    </Container>
  );
};

export default UserProfile;
