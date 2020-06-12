/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import { COLORS } from '../constants';

// animation when user info box is loaded
const slideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(3rem) scale(0, 0)
  }

  75% {
    transform: translateX(-.2rem) scale(1.1, 1.1)
  }

  100% {
    opacity: 1;
  }
`;

// userInfoBox styles
const userInfoBoxStyles = css`
  border: solid ${COLORS.blue} 0.1rem;
  border-radius: 1.5rem;
  padding: 1.5rem;
  margin: 1rem auto;
  line-height: 1.7;
  font-size: 1.6rem;
  animation: ${slideLeft} 0.5s ease-in-out;
  transform-origin: top left;

  #name {
  }

  #email {
    text-decoration: none;
  }

  #dateJoined {
    font-weight: bold;
    font-style: italic;
    color: ${COLORS.tan};
  }
`;

const UserProfileBox = (props) => {
  if (props.userJSON) {
    // QUESTION: How do I use react hooks to animate on unmounting
    const username = props.userJSON.username;
    const name = props.userJSON.first_name + ' ' + props.userJSON.last_name;
    const email = props.userJSON.email_address;
    // Dates in DB do not include milliseconds but Date() object expects
    // milliseconds, hence multiplying by 1000
    const dateJoinedObj = new Date(props.userJSON.date_joined * 1000);
    // gets month by name (ex: January) instead of index (ex: 0)
    const month = dateJoinedObj.toLocaleString('default', { month: 'long' });
    const dateJoinedString =
      month +
      ' ' +
      dateJoinedObj.getDate() + // day of month
      ', ' +
      dateJoinedObj.getFullYear(); // ex: 2020

    return (
      <div css={userInfoBoxStyles}>
        <h2 id={'username'}>{username}</h2>
        <h3 id={'name'}>{name}</h3>
        <div>
          <a id={'email'} href={'mailto:' + email}>
            {email}
          </a>
          <div id={'dateJoined'}>2Reddit2Furious Since: {dateJoinedString}</div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default UserProfileBox;
