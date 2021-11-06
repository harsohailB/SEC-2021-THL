import React from "react";
import WatchlistEntry from "./WatchlistEntry";

const Watchlist = () => {
  const fakeWatchlistData = [
    {
      ticker: "AAPL",
      price: 123.33
    },
    {
      ticker: "TSLA",
      price: 1232.33
    },
    {
      ticker: "BTC",
      price: 1223.33
    },
    {
      ticker: "ETH",
      price: 3232.33
    }
  ];

  const renderWatchlistEntries = () => {
    return fakeWatchlistData.map((entryData) => (
      <WatchlistEntry ticker={entryData.ticker} price={entryData.price} />
    ));
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-4">
        <h1>Watchlist</h1>
        <span>Add Ticker</span>
      </div>

      {renderWatchlistEntries()}
    </div>
  );
};

export default Watchlist;
