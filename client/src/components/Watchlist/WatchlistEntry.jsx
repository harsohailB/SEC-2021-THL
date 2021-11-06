import React from "react";

const WatchlistEntry = (props) => {
  return (
    <div className="flex justify-between border-t-2 p-4">
      <h1>{props.ticker}</h1>
      <h1>${props.price}</h1>
    </div>
  );
};

export default WatchlistEntry;
