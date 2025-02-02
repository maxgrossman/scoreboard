var path = require("path");

/**
 * GET /api/v2/data/challenge/14290
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "260");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MjkwLCJuYW1lIjoiTmlnZXJpYSAtIFBvc3NpYmxlIEJyaWRnZXMiLCJhY3Rpb25zIjp7InRvdGFsIjozNjY3LCJhdmFpbGFibGUiOjM1MTUsImZpeGVkIjoxMDMsImZhbHNlUG9zaXRpdmUiOjEwLCJza2lwcGVkIjoxNCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjoxLCJ0b29IYXJkIjoyNCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MjA1MzU3LCJ0YXNrc1dpdGhUaW1lIjoxNTF9fV0=", "base64"));
  res.end();

  return __filename;
};
