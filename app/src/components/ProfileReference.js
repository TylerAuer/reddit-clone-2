import React from 'react';
import { Link } from 'react-router-dom';

const ProfileReference = ({ children, userID }) => {
  return <Link to={`/profile/read/${userID}`}>{children}</Link>;
};

export default ProfileReference;
