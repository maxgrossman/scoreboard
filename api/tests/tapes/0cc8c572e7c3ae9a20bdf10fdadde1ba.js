var path = require("path");

/**
 * GET /api/v2/data/challenge/14315
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "251");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MzE1LCJuYW1lIjoiU3RyYW5nZSBCdWlsZGluZyBIZWlnaHRzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MjY1LCJhdmFpbGFibGUiOjE4MiwiZml4ZWQiOjMsImZhbHNlUG9zaXRpdmUiOjczLCJza2lwcGVkIjozLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjEsInRvb0hhcmQiOjMsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjExOTUzOSwidGFza3NXaXRoVGltZSI6ODN9fV0=", "base64"));
  res.end();

  return __filename;
};
