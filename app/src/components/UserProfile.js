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

  const PostList = info.posts.map((post) => {
    return (
      <List.Item>
        <List.Icon
          name="newspaper outline"
          size="large"
          verticalAlign="middle"
        />
        <List.Content>
          <List.Header>
            <Link to={`/post/read/${post.id}`}>{post.post_title}</Link>
          </List.Header>
          <List.Description>
            <span className="profile__post-date">
              {formatDistance(new Date(post.updatedAt), new Date())} ago
            </span>
          </List.Description>
        </List.Content>
      </List.Item>
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
      <Header as="h3">Posts</Header>
      <List size="large" relaxed="very">
        {PostList}
      </List>
    </Container>
  );
};

export default UserProfile;
