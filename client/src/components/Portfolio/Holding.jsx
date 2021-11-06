import React, { useState } from "react";

const Holding = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between border-t-2 p-4 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span>{props.holding.coinId}</span>

        <div className="flex items-center">
          <span className="mr-2">{props.holding.quantity}</span>
          <span className="mx-2">$34,000.00</span>
          <span className="ml-2">+$12.00</span>
        </div>
      </div>
      {open && <h1 className="m-4">Chart goes here</h1>}
    </div>
  );
};

export default Holding;
