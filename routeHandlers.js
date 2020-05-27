// URL --> "/"
const baseRouteHandler = (req, res) => res.send("Hello World!");

/**
 * Each request handler will:
 * Call an API (defined elsewhere) to interact with our data model
 *
 */
module.exports = { baseRouteHandler };
