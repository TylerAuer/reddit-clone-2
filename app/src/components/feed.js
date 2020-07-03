import React from 'react';
import { formatDistance } from 'date-fns';
import { Feed, Icon, Divider } from 'semantic-ui-react';
import { FeedContext } from '../contexts/FeedContext';
import { FeatureContext } from '../contexts/FeatureContext';
import { UserProfileContext } from '../contexts/UserProfileContext';
import { FEATURES } from '../constants';
import truncate from '../functions/truncate';

const FeedPostSingle = (props) => {
  const [, setUserProfile] = React.useContext(UserProfileContext);
  const [, setFeature] = React.useContext(FeatureContext);

  const post = (
    <>
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary onClick={() => props.onClickPost(props.postData.id)}>
            {props.postData.title}
          </Feed.Summary>
          <Feed.Summary>
            <Feed.User
              onClick={() => {
                setUserProfile(props.postData.author_username);
                setFeature(FEATURES.USER_READ);
              }}
            >
              {props.postData.author_username}
            </Feed.User>
            <Feed.Date>
              {formatDistance(new Date(props.postData.lastUpdated), new Date())}{' '}
              ago
            </Feed.Date>
          </Feed.Summary>
          <Feed.Extra>{truncate(props.postData.body, 300)}</Feed.Extra>
          <Feed.Meta>
            <Icon name="comment" /> {props.postData.commentCount}
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
      <Divider />
    </>
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

  return <Feed size="large">{arrOfPosts}</Feed>;
};

export default FeedOfPosts;
