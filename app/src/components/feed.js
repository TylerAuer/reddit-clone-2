import React from 'react';
import { formatDistance } from 'date-fns';
import { Item, Icon } from 'semantic-ui-react';
import { FeedContext } from '../contexts/FeedContext';
import { FeatureContext } from '../contexts/FeatureContext';
import { UserProfileContext } from '../contexts/UserProfileContext';
import truncate from '../functions/truncate';
import ProfileReference from './ProfileReference';

const FeedPostSingle = (props) => {
  const [, setUserProfile] = React.useContext(UserProfileContext);
  const [, setFeature] = React.useContext(FeatureContext);

  const post = (
    <Item>
      <Item.Content>
        <Item.Header onClick={() => props.onClickPost(props.postData.id)}>
          {props.postData.title}
        </Item.Header>

        <ProfileReference username={props.postData.author_username}>
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
          <Icon name="comment" /> {props.postData.commentCount}
        </Item.Extra>
      </Item.Content>
    </Item>
  );

  return props.postData ? post : <div>Post loading...</div>;
};

const FeedOfPosts = (props) => {
  const [feed] = React.useContext(FeedContext);
  const [postList, setPostList] = React.useState([]);

  // If there are conditions specified for the feed
  // build a query string
  let queryString = '';
  if (Object.keys(feed).length) {
    queryString += '?';
    for (const prop in feed) {
      queryString += `${prop}=${feed[prop]}&`;
    }
  }

  React.useEffect(() => {
    fetch(`/API/feed/options/${queryString}`).then((response) => {
      if (response.status === 200) {
        response.json().then((data) => setPostList(data));
      }
    });
  }, [queryString]);

  const arrOfPosts = postList.map((post) => (
    <FeedPostSingle
      key={post.id}
      onClickPost={props.onClickPost}
      postData={post}
    />
  ));

  return <Item.Group divided>{arrOfPosts}</Item.Group>;
};

export default FeedOfPosts;
