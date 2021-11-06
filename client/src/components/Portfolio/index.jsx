import React, { useContext, useEffect, useState } from "react";
import { getPortfolio } from "../../actions/portfolio";
import { UserContext } from "../../contexts/UserContext";
import Holding from "./Holding";

const initialData = {
  portfolio_title: "Loading...",
  holdings: []
};

const Portfolio = () => {
  const [user] = useContext(UserContext);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (user) {
      getPortfolio(user._id).then((data) => setData(data));
    }
  }, [user]);

  const renderHoldings = () => {
    return data.holdings.map((holding) => <Holding holding={holding} />);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold">
        Portfolio: {data.portfolio_title}
      </h1>

      <h3 className="text-3xl font-extrabold mt-4 mb-2">Current Holdings:</h3>

      {data.holdings.length > 0 ? (
        renderHoldings()
      ) : (
        <span>You have no holdings!</span>
      )}
    </div>
  );
};

export default Portfolio;
