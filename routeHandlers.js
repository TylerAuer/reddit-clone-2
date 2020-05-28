const path = require("path");

// "/"
const baseRouteHandler = (req, res) => res.send("Hello World!");
// "/tyler"
const tylerRouteHandler = (req, res) =>
  res.sendFile(path.join(__dirname + "/tyler.html"));

/**
 * Each request handler will:
 * Call an API (defined elsewhere) to interact with our data model
 *
 */
module.exports = { baseRouteHandler, tylerRouteHandler };
