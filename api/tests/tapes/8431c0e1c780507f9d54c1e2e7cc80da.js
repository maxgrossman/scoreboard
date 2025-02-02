var path = require("path");

/**
 * GET /api/v2/data/challenge/14161
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "244");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MTYxLCJuYW1lIjoiSm9yZGFuIC0gQ3Jvc3NpbmcgUm9hZHMiLCJhY3Rpb25zIjp7InRvdGFsIjo3LCJhdmFpbGFibGUiOjAsImZpeGVkIjo0LCJmYWxzZVBvc2l0aXZlIjowLCJza2lwcGVkIjowLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjMsImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjE5NDgxMywidGFza3NXaXRoVGltZSI6N319XQ==", "base64"));
  res.end();

  return __filename;
};
