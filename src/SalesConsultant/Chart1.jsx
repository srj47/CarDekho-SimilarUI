import React from "react";
import { Line } from "react-chartjs-2";
// note: not remove chart.js/auto
import "chart.js/auto";

export const data = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "Sales",
      tension: 0.4,
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 4,
      borderSkipped: true,
      backgroundColor: "rgba(255, 255, 255, .8)",
      data: [50, 20, 10, 22, 50, 10, 40],
      BarThickness: 6,
    },
  ],
};

export const option = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: true,
        drawOnChartArea: true,
        drawTicks: false,
        borderDash: [5, 5],
        color: "rgba(255, 255, 255, .2)",
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 500,
        beginAtZero: true,
        padding: 10,
        font: {
          size: 14,
          weight: 300,
          family: "Roboto",
          style: "normal",
          lineHeight: 2,
        },
        color: "#fff",
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: true,
        drawOnChartArea: true,
        drawTicks: false,
        borderDash: [5, 5],
        color: "rgba(255, 255, 255, .2)",
      },
      ticks: {
        display: true,
        color: "#f8f9fa",
        padding: 10,
        font: {
          size: 14,
          weight: 300,
          family: "Roboto",
          style: "normal",
          lineHeight: 2,
        },
      },
    },
  },
};

const LineChart = () => {
  return <Line data={data} options={option} height={170} />;
};
export default LineChart;
