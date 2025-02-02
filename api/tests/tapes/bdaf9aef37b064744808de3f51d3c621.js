var path = require("path");

/**
 * GET /api/v2/data/challenge/14030
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:46 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "246");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE0MDMwLCJuYW1lIjoiTWFsaSAtIENyb3NzaW5nIFJvYWRzIiwiYWN0aW9ucyI6eyJ0b3RhbCI6NTMsImF2YWlsYWJsZSI6MzMsImZpeGVkIjoxMCwiZmFsc2VQb3NpdGl2ZSI6MSwic2tpcHBlZCI6NCwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjo1LCJ0b29IYXJkIjowLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyNDc4NjYsInRhc2tzV2l0aFRpbWUiOjIwfX1d", "base64"));
  res.end();

  return __filename;
};
