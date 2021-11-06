var express = require("express");
var router = express.Router();

//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

/* GET home page. */
router.get("/", async function (req, res) {
  let data = await CoinGeckoClient.ping();
  res.send({ test: data });
});

router.get("/api", function (req, res, next) {
  res.send({ test: "what" });
});


module.exports = router;
