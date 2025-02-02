var path = require("path");

/**
 * GET /api/v2/data/challenge/15357
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "326");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzU3LCJuYW1lIjoi0KHQstGP0LfQvdC+0YHRgtGMINGA0LXQuiDQsiDQodC10LLQtdGA0L4t0JrQsNCy0LrQsNC30YHQutC+0Lwg0YTQtdC00LXRgNCw0LvRjNC90L7QvCDQvtC60YDRg9Cz0LUiLCJhY3Rpb25zIjp7InRvdGFsIjoxMjIsImF2YWlsYWJsZSI6MTksImZpeGVkIjo4NSwiZmFsc2VQb3NpdGl2ZSI6MCwic2tpcHBlZCI6MCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo4LCJ0b29IYXJkIjoxMCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6NDQxNDQ1LCJ0YXNrc1dpdGhUaW1lIjoxMDN9fV0=", "base64"));
  res.end();

  return __filename;
};
