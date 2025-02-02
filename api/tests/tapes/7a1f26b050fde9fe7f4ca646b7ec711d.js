var path = require("path");

/**
 * GET /api/v2/data/challenge/15352
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
  res.setHeader("content-length", "250");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzUyLCJuYW1lIjoiTWNEb25hbGQncyBkcml2ZSB0aHJvdWdoIiwiYWN0aW9ucyI6eyJ0b3RhbCI6ODIwLCJhdmFpbGFibGUiOjAsImZpeGVkIjo4MTIsImZhbHNlUG9zaXRpdmUiOjEsInNraXBwZWQiOjAsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6NiwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6Nzk1NDAsInRhc2tzV2l0aFRpbWUiOjgyMH19XQ==", "base64"));
  res.end();

  return __filename;
};
