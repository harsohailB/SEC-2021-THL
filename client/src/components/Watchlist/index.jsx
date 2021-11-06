import React, { useState } from "react";
import WatchlistEntry from "./WatchlistEntry";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import { useStyles } from "../../utils/styles";

const Watchlist = () => {
  const classes = useStyles();
  const fakeWatchlistData = [
    {
      coinId: "bitcoin",
      price: 123.33
    }
  ];

  const [input, setInput] = useState("");
  const [adding, setAdding] = useState(false);

  const renderWatchlistEntries = () => {
    return fakeWatchlistData.map((entryData) => (
      <WatchlistEntry coinId={entryData.coinId} price={entryData.price} />
    ));
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-4 items-center">
        <h1 className="text-5xl font-extrabold">Watchlist</h1>

        <div className="flex">
          <form className={classes.form} noValidate onSubmit={submitForm}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="ticker"
              label="Ticker"
              name="ticker"
              autoComplete="ticker"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              error={input.length === 0}
            />
          </form>
          <IconButton size="medium" color="inherit" onClick={submitForm}>
            <CheckIcon />
          </IconButton>
        </div>
      </div>

      {renderWatchlistEntries()}
    </div>
  );
};

export default Watchlist;
