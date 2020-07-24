import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import { Item, Icon, Label, Button } from 'semantic-ui-react';
import ProfileReference from './ProfileReference';
import truncate from '../functions/truncate';
import { useTrail, animated } from 'react-spring';

const FeedPostSingle = (props) => {
  if (props.postData.id === 122) {
    console.log(props);
  }
  const post = (
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

      <Item.Description>{truncate(props.postData.body, 300)}</Item.Description>

      <Item.Extra>
        <Label>
          <Icon name="comment" /> {props.postData.commentCount}
        </Label>
        <Label>
          <Icon name="heart" /> {props.postData.heartCount}
        </Label>
      </Item.Extra>
    </Item.Content>
  );

  return props.postData ? post : <div>Post loading...</div>;
};

const FeedOfPosts = (props) => {
  const [postData, setPostData] = useState({
    post_count_ignoring_pagination: 0,
    posts: [],
  });
  const location = useLocation();

  // API call made when component mounts and when query string changes
  React.useEffect(() => {
    fetch(`/API/feed/${location.search}`).then((response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          setPostData(data);
        });
      }
    });
  }, [location]);

  const trail = useTrail(postData.posts.length, {
    from: { marginLeft: -10, opacity: 0 },
    to: { marginLeft: 0, opacity: 1 },
  });

  const AnimatedItem = animated(Item);

  // Generates array of Single Post Components
  //const arrOfPosts = postData.posts.map((post) => (
  const arrOfPosts = trail.map((props, index) => (
    <AnimatedItem style={props} key={postData.posts[index].id}>
      <FeedPostSingle
        onClickPost={props.onClickPost}
        postData={postData.posts[index]}
      />
    </AnimatedItem>
  ));

  // Default Query string values
  const query = {
    post_offset: 0,
    post_count: 10,
  };

  // If there is a query string, convert it into object.
  // This makes it easy to manipulate different properties of the query
  // like changing post_offset for pagination
  if (location.search !== '') {
    // IF prevents adding empty property when no query
    location.search
      .slice(1) // remove initial ?
      .split('&') // split queries into array of key-value pairs
      .map((pair) => pair.split('=')) // split each key-value pair into subarray
      .forEach((pair) => {
        query[pair[0]] = pair[1]; // replace default settings set above
      });
  }

  const newerBtnQueryObj = { ...query };
  newerBtnQueryObj.post_offset =
    query.post_offset >= query.post_count // Makes sure offset isn't < 0
      ? query.post_offset - query.post_count
      : 0;

  const olderBtnQueryObj = { ...query };
  olderBtnQueryObj.post_offset += query.post_count;

  const convertQueryObjectToString = (obj) => {
    return (
      '?' +
      Object.keys(obj)
        .map((key) => key + '=' + obj[key])
        .join('&')
    );
  };

  const isNewerBtnDisabled = query.post_offset <= 0 ? 'disabled' : '';

  const isOlderBtnDisabled =
    query.post_offset + query.post_count >=
    postData.post_count_ignoring_pagination
      ? 'disabled'
      : '';

  return (
    <>
      <Item.Group divided>{arrOfPosts}</Item.Group>
      <Link
        to={{
          pathname: '/feed',
          search: convertQueryObjectToString(newerBtnQueryObj),
        }}
      >
        <Button
          className={isNewerBtnDisabled}
          color="blue"
          size="large"
          floated="left"
        >
          <Icon name="arrow left" /> Newer
        </Button>
      </Link>
      <Link
        to={{
          pathname: '/feed',
          search: convertQueryObjectToString(olderBtnQueryObj),
        }}
      >
        <Button
          className={isOlderBtnDisabled}
          color="blue"
          size="large"
          floated="right"
        >
          Older <Icon name="arrow right" />
        </Button>
      </Link>
    </>
  );
};

export default FeedOfPosts;
