const heartsAPI = require('../api/hearts');

// Add heart
const addHeart = async (req, res) => {
  console.log(
    `HEART: Adding heart by user ${req.query.userID} to content ${req.query.content_parent}`
  );
  heartsAPI.addHeart(req.query.userID, req.query.content_parent);
  res.send('Heart recorded');
};

// Remove heart
const removeHeart = async (req, res) => {
  console.log(
    `HEART: Deleting heart by user ${req.query.userID} to content ${req.query.content_parent}`
  );
  heartsAPI.removeHeart(req.query.userID, req.query.content_parent);
  res.send('Heart deleted');
};

module.exports = { addHeart, removeHeart };
