import React, { useState, useEffect } from "react";
import WatchlistEntry from "./WatchlistEntry";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";

import { getCoin } from "../../actions/coin"
import { addToWatchlist, getWatchlist } from "../../actions/user"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const Watchlist = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [adding, setAdding] = useState(false);
  const [result, setResult] = useState({});
  const [watchlist, setWatchlist] = useState([]);
  const [modified, setModified] = useState(false);
  const userId = localStorage.getItem("id");

  const renderWatchlistEntries = () => {
    return watchlist.map((entryData) => (
      <WatchlistEntry ticker={entryData.ticker} price={entryData.price} />
    ));
  };

  useEffect(() => {
    getWatchlist(userId.substring(1, userId.length-1)).then(res => setWatchlist(res.payload._data.tickers));
  }, [])

  const submitForm = async (e) => {
    // console.log(userId)
    // Call API to see if it is valid ticker
    getCoin(input).then(res => {
      if(res.payload.data.error) {
        console.log("invalid tag")
      } else {
        addToWatchlist(userId.substring(1, userId.length-1), res.payload.data.symbol.toUpperCase(), res.payload.data.market_data.current_price.cad);
        setModified(!modified);
      }
    })

    // console.log(localStorage.getItem("user"))
    // console.log(result);
    e.preventDefault();
  };

  return (
    <div className="flex flex-col" key={modified}>
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

      {watchlist != [] ? renderWatchlistEntries() : <div></div>}
    </div>
  );
};

export default Watchlist;
