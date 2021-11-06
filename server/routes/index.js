var express = require("express");
var router = express.Router();

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
router.get("/watchlist/add", async function (req, res) {
  // adding coins to be tracked by user
});

/* Retrieve coins in watchlist API */
router.get("/watchlist/list", async function (req, res) {

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
