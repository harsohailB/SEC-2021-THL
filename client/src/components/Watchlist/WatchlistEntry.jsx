import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const WatchlistEntry = (props) => {
  return (
    <div className="flex justify-between border-t-2 p-4 items-center">
      <span>{props.ticker}</span>

      <div className="flex items-center">
        <span>${props.price}</span>
        <div className="ml-2 bg-green-400 rounded-md p-1 cursor-pointer">
          Buy
        </div>
      </div>
    </div>
  );
};

export default WatchlistEntry;
