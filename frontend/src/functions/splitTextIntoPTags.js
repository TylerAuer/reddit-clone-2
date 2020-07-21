import React from 'react';

const splitTextIntoPTags = (text) => {
  return text
    .split('\n') // Split into array
    .filter((p) => p !== '') // Remove empty strings from "\n\n" in body
    .map((p, index) => <p key={index}>{p}</p>); // wrap each paragraph with <p></p>
};

export default splitTextIntoPTags;
