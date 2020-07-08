import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import { Item, Icon, Label } from 'semantic-ui-react';
import truncate from '../functions/truncate';
import ProfileReference from './ProfileReference';

const FeedPostSingle = (props) => {
  const post = (
    <Item>
      <Item.Content>
        <Item.Header style={{ cursor: 'pointer' }}>
          <Link to={`/post/read/${props.postData.id}`}>
            {props.postData.title}
          </Link>
        </Item.Header>

        <ProfileReference userID={props.postData.author_id}>
          <Item.Meta>
            <span style={{ color: 'blue' }}>
              {' '}
              {props.postData.author_username}
            </span>{' '}
            <span style={{ fontStyle: 'italic' }}>
              {formatDistance(new Date(props.postData.lastUpdated), new Date())}{' '}
              ago
            </span>
          </Item.Meta>
        </ProfileReference>

        <Item.Description>
          {truncate(props.postData.body, 300)}
        </Item.Description>

        <Item.Extra>
          <Label>
            <Icon name="comment" /> {props.postData.commentCount}
          </Label>
          <Label>
            <Icon name="heart" /> {props.postData.heartCount}
          </Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  );

  return props.postData ? post : <div>Post loading...</div>;
};

const FeedOfPosts = (props) => {
  const [postList, setPostList] = useState([]);
  const { search } = useLocation();

  console.log(search);

  React.useEffect(() => {
    fetch(`/API/feed/${search}`).then((response) => {
      if (response.status === 200) {
        response.json().then((data) => setPostList(data));
      }
    });
  }, [search]);

  const arrOfPosts = postList.map((post) => (
    <FeedPostSingle
      key={post.id}
      onClickPost={props.onClickPost}
      postData={post}
    />
  ));

  return (
    <>
      <Item.Group divided>{arrOfPosts}</Item.Group>
    </>
  );
};

export default FeedOfPosts;
