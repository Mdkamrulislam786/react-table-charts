import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "# of Employee",
      data: [22, 12, 5, 8, 9, 1],
      fill: false,
      backgroundColor: "rgba(255, 159, 64)",
      borderColor: "rgba(255, 159, 64, 0.2)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
const LineChart = () => <Line data={data} options={options} />;

export default LineChart;
