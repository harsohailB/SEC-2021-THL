import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const WatchlistEntry = (props) => {
  const [input, setInput] = useState(0);

  return (
    <div className="flex justify-between border-t-2 p-4 items-center">
      <span>{props.ticker}</span>

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
        <div className="ml-2 bg-green-400 rounded-md p-1 cursor-pointer">
          Buy
        </div>
      </div>
    </div>
  );
};

export default WatchlistEntry;
