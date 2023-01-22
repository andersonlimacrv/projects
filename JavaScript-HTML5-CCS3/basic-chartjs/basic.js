import Chart from "chart.js/auto";
const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Barcharting",
      barPrecentage: 0.5,
      // barThickness: 100,
      hoverBackgroundColor: "#555",
      maxBarThickness: 100,
      minBarLength: 32,
      data: [10, 20, 30, 50, 30, 20],
      backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    },
  ],
};
const options = {
  scales: {
    xAxes: [
      {
        gridLines: {
          offsetGridLines: true,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const ctx = document.getElementById("myChart").getContext("2d");
const chart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});
