import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getCoinHistory } from "../../actions/coin";
import CheckIcon from "@material-ui/icons/Check";
import { IconButton, TextField } from "@material-ui/core";
import { useStyles } from "../../utils/styles";

const ProfitLoss = () => {
  const classes = useStyles();
  const [coinId, setCoinId] = useState("bitcoin");
  const [xAxis, setXAxis] = useState([]);
  const [yAxis, setYAxis] = useState([]);
  const [input, setInput] = useState("");

  const data = {
    labels: xAxis,
    datasets: [
      {
        label: coinId,
        data: yAxis,
        fill: false,
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgba(60, 165, 214)",
      },
    ],
  };

  useEffect(() => {
    async function fetchHistory(id) {
      const { data } = await getCoinHistory(id);
      console.log(data);

      setXAxis(data.prices.map((x) => new Date(x[0]).toDateString()));
      setYAxis(data.prices.map((x) => x[1]));
    }

    fetchHistory(coinId);
  }, [coinId]);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: true,
      text: "Profit Loss Evaluation",
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            fontSize: 15,
            fontFamily: "Roboto",
            labelString: "Coin Price",
            padding: 25,
          },
          ticks: {
            fontFamily: "Roboto",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            fontSize: 15,
            fontFamily: "Roboto",
            labelString: "Date",
            padding: 25,
          },
          gridLines: {
            display: false,
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 14,
            fontFamily: "Roboto",
          },
        },
      ],
    },
  };

  const submitForm = () => {
    setCoinId(input);
  };

  return (
    <>
      <div className="flex justify-center">
        <form className={classes.form} noValidate onSubmit={submitForm}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="coinId"
            label="Coin Name"
            name="Coin Name"
            autoComplete="coinId"
            autoFocus
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            error={input.length === 0}
          />
        </form>
        <IconButton size="medium" color="inherit" onClick={submitForm}>
          <CheckIcon />
        </IconButton>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "500px",
          margin: "75px",
          padding: "10px",
          borderRadius: "25px",
          alignItems: "center",
        }}
      >
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default ProfitLoss;
