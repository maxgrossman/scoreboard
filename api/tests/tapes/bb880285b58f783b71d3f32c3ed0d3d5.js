var path = require("path");

/**
 * GET /api/v2/data/challenge/14456
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:17 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "238");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0NDU2LCJuYW1lIjoiQ2hpbmEgTG9vc2UiLCJhY3Rpb25zIjp7InRvdGFsIjoxMzcsImF2YWlsYWJsZSI6MCwiZml4ZWQiOjAsImZhbHNlUG9zaXRpdmUiOjM0LCJza2lwcGVkIjozLCJkZWxldGVkIjowLCJhbHJlYWR5Rml4ZWQiOjAsInRvb0hhcmQiOjEwMCwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6OTkzMjcsInRhc2tzV2l0aFRpbWUiOjEzN319XQ==", "base64"));
  res.end();

  return __filename;
};
