var path = require("path");

/**
 * GET /api/v2/data/challenge/15320
 *
 * accept-language: en-US,en;q=0.9
 * host: maproulette.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx/1.14.0 (Ubuntu)");
  res.setHeader("date", "Tue, 02 Mar 2021 09:55:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "268");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Origin");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOjE1MzIwLCJuYW1lIjoiZml4IHJlZiB0byBkZXN0aW5hdGlvbjpyZWYgaW4gR2VybWFueSIsImFjdGlvbnMiOnsidG90YWwiOjI0NzAsImF2YWlsYWJsZSI6MjE2MSwiZml4ZWQiOjI5NiwiZmFsc2VQb3NpdGl2ZSI6Nywic2tpcHBlZCI6NSwiZGVsZXRlZCI6MCwiYWxyZWFkeUZpeGVkIjowLCJ0b29IYXJkIjoxLCJhbnN3ZXJlZCI6MCwidmFsaWRhdGVkIjowLCJkaXNhYmxlZCI6MCwiYXZnVGltZVNwZW50IjoyNDY0ODIsInRhc2tzV2l0aFRpbWUiOjMwOX19XQ==", "base64"));
  res.end();

  return __filename;
};
