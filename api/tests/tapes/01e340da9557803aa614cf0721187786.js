var path = require("path");

/**
 * GET /api/v2/data/challenge/15329
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "255");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzI5LCJuYW1lIjoiMSByw7phIDEgbm9tZSBMdWdvIiwiYWN0aW9ucyI6eyJ0b3RhbCI6MTUzMDYsImF2YWlsYWJsZSI6MTMzMjksImZpeGVkIjoxNjI1LCJmYWxzZVBvc2l0aXZlIjozMjAsInNraXBwZWQiOjEsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MjIsInRvb0hhcmQiOjksImFuc3dlcmVkIjowLCJ2YWxpZGF0ZWQiOjAsImRpc2FibGVkIjowLCJhdmdUaW1lU3BlbnQiOjYwMzM2LCJ0YXNrc1dpdGhUaW1lIjoxNjczfX1d", "base64"));
  res.end();

  return __filename;
};
