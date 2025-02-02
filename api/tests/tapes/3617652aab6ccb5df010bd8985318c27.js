var path = require("path");

/**
 * GET /api/v2/data/challenge/15411
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:54:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "250");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1NDExLCJuYW1lIjoiUmVzZXJ2b2lyIE5vZGVzIFVTLUFaIiwiYWN0aW9ucyI6eyJ0b3RhbCI6ODE5MCwiYXZhaWxhYmxlIjo4MTQwLCJmaXhlZCI6NDgsImZhbHNlUG9zaXRpdmUiOjAsInNraXBwZWQiOjEsImRlbGV0ZWQiOjAsImFscmVhZHlGaXhlZCI6MCwidG9vSGFyZCI6MSwiYW5zd2VyZWQiOjAsInZhbGlkYXRlZCI6MCwiZGlzYWJsZWQiOjAsImF2Z1RpbWVTcGVudCI6MTY0NzU2LCJ0YXNrc1dpdGhUaW1lIjo1MH19XQ==", "base64"));
  res.end();

  return __filename;
};
