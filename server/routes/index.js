var express = require("express");
var router = express.Router();

//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

/* API to get list of names of coins */
router.get("/coins/list", async function (req, res) {
  let response = await CoinGeckoClient.coins.list();

  //response's data contains array of objects that contain the name
  res.send({ data: response.data });
});

/* Search API */
router.get("/coins/search/:coinId", async function (req, res) {
  // pass in user query into coinId sub URL, then fetch the coin that the user searched
  let response = await CoinGeckoClient.coins.fetch(req.params.coinId, {});

  //response's data contains array of objects that contain the name
  res.send({ data: response.data });
});

router.get("/", async function (req, res) {
  let data = await CoinGeckoClient.ping();
  res.send({ test: data });
});

router.get("/api", function (req, res, next) {
  res.send({ test: "what" });
});


module.exports = router;
