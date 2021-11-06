import React from "react";
import Holding from "./Holding";

const Portfolio = () => {
  const fakePortoflioData = {
    title: "Stonks",
    holdings: [
      {
        ticker: "AAPL",
        quantity: 23
      },
      {
        ticker: "BTC",
        quantity: 2
      }
    ]
  };

  const renderHoldings = () => {
    return fakePortoflioData.holdings.map((holding) => (
      <Holding holding={holding} />
    ));
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold">
        Portfolio: {fakePortoflioData.title}
      </h1>

      <h3 className="text-3xl font-extrabold mt-4 mb-2">Current Holdings:</h3>

      {renderHoldings()}
    </div>
  );
};

export default Portfolio;
