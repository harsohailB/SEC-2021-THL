var express = require("express");
var router = express.Router();

// Database imports
const mongoose = require("mongoose");
const WatchList = mongoose.model("watchlist");

// Internal imports
const { SUCCESS, NOT_FOUND } = require("../utils/http");

//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();



/* Get All Coins API */
router.get("/coins/list", async function (req, res) {
  let response = await CoinGeckoClient.coins.list();

  // response's data contains array of objects that contain the names of all coins
  res.send({ data: response.data });
});

/* Coin Search API 
*  Once coin is retrieved from API, frontend will provide two options (and call appropriate API to accomplish each action)
*  1. Adding coin to watchlist (Add to watchlist API)
*  2. Buying coin (Buy coin API)
*/
router.get("/coins/search/:coinId", async function (req, res) {
  // pass in user query into coinId sub URL, then fetch the coin that the user searched
  let response = await CoinGeckoClient.coins.fetch(req.params.coinId, {});
  let price = await CoinGeckoClient.coins.fetch(req.params.coinId, {});
  res.send({ data: response.data });
});

/* Coin History (with date range) API 
*  Note: Dates need to be in UNIX Timestamp format
*  Fix sub URL path if needed, kinda messy
*/
router.get("/coins/history/:coinId/:startDate/:endDate", async function (req, res) {
  // pass in user query into coinId sub URL, then fetch the coin that the user searched
  let response = await CoinGeckoClient.coins.fetchMarketChartRange(req.params.coinId, {
    from: req.params.startDate, 
    to: req.params.endDate 
  });

  res.send({ data: response.data });
});



/* Add to watchlist API */
router.post("/watchlist/add/:id/:ticker/:price", async (req, res) => {
  // adding coins to be tracked by user
  console.log(req.params.price);
  let foundWatchList = await WatchList.findOne({ user: req.params.id });

  if (!foundWatchList) {
    foundWatchList = new WatchList({ user: req.params.id, tickers: []});
  }

  if (!foundWatchList.tickers.includes(req.params.ticker)) {
    foundWatchList.tickers.push({ticker: req.params.ticker, price: req.params.price});
    foundWatchList.save();
  }

  res.status(SUCCESS).send({ data: foundWatchList });
});

router.delete("/watchlist/add", async (req, res) => {
  const { id, ticker } = req.query;

  let foundWatchList = await WatchList.findOne({ user: id });

  if (!foundWatchList) {
    res.status(NOT_FOUND).send({ data: "Watch list not found" });
  }

  if (!foundWatchList.tickers.includes(ticker)) {
    res.status(NOT_FOUND).send({ data: "Ticker not found"});
  }

  foundWatchList.tickers.pull(ticker);
  foundWatchList.save();

  res.status(SUCCESS).send({ data: foundWatchList });
})

/* Retrieve coins in watchlist API */
router.get("/watchlist/list/:id", async function (req, res) {
  const { id } = req.query;

  let foundWatchList = await WatchList.findOne({ user: req.params.id });

  if (!foundWatchList) {
    foundWatchList = new WatchList({ user: req.params.id, tickers: []});
    foundWatchList.save();
  }

  res.status(SUCCESS).send({_data: foundWatchList });
});



/* Buy coin API 
*  API will be called from two possible locations:
*  1. Click "buy" from searching coin
*  2. Clicking "quick buy" from searching coin
*/
router.get("/coins/buy/:coinID/:quantity", async function (req, res) {
  // params contains coinID and quantity
  let params = req.params
});





module.exports = router;
