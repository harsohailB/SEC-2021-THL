import React, { useContext, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { buyCoin } from "../../actions/coin";
import { UserContext } from "../../contexts/UserContext";
import history from "../../utils/history";

const WatchlistEntry = (props) => {
  const [user] = useContext(UserContext);
  const [input, setInput] = useState(0);

  const handleBuyCoin = () => {
    buyCoin({ userId: user._id, coinId: props.coinId, quantity: input }).then(
      (_) => {
        history.push("/portfolio");
      }
    );
  };

  return (
    <div className="flex justify-between border-t-2 p-4 items-center">
      <span>{props.coinId}</span>

      <div className="flex items-center">
        <span className="mr-2">${props.price}</span>
        <TextField
          type="number"
          variant="outlined"
          required
          fullWidth
          id="quantity"
          label="Quantity"
          name="quantity"
          autoComplete="quantity"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          error={input === 0}
        />
        <div
          className="ml-2 bg-green-400 rounded-md p-1 cursor-pointer"
          onClick={handleBuyCoin}
        >
          Buy
        </div>
      </div>
    </div>
  );
};

export default WatchlistEntry;
