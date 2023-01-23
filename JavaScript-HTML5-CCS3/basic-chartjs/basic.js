Chart.defaults.global.defaultFontFamily = "Lato";

var gradientBarCtx = document
  .getElementById("gradientChartCanvas")
  .getContext("2d");

var blue_green_gradient = gradientBarCtx.createLinearGradient(0, 0, 0, 300);
blue_green_gradient.addColorStop(0.4, "#9EE493");
blue_green_gradient.addColorStop(1, "#0f91ce");

var orange_red_gradient = gradientBarCtx.createLinearGradient(0, 0, 0, 300);
orange_red_gradient.addColorStop(0.4, "#ce0f0f");
orange_red_gradient.addColorStop(1, "#ff8400");

var gradientBar = new Chart(gradientChartCanvas, {
  type: "bar",
  data: {
    labels: [
      "Label 1",
      "Label 2",
      "Label 3",
      "Label 4",
      "Label 5",
      "Label 6",
      "Label 7",
    ],
    datasets: [
      {
        data: [200, 400, 600, 800, 1000, 1200, 1400],
        backgroundColor: [
          blue_green_gradient,
          orange_red_gradient,
          blue_green_gradient,
          orange_red_gradient,
          blue_green_gradient,
          orange_red_gradient,
          blue_green_gradient,
        ],
        hoverBackgroundColor: [
          "#09c0f1",
          "#09c0f1",
          "#09c0f1",
          "#09c0f1",
          "#0678b1",
          "#0678b1",
          "#0678b1",
        ],
      },
    ],
  },
  options: {
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        padding: 50,
      },
    },
    scales: {
      xAxes: [
        {
          barPercentage: 0.8,
          gridLines: {
            display: true,
            drawTicks: true,
            drawOnChartArea: false,
          },
          ticks: {
            fontColor: "#555759",
            fontFamily: "Lato",
            fontSize: 16,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            drawTicks: true,
            tickMarkLength: 5,
            drawOnChartArea: true,
          },
          ticks: {
            padding: 10,
            beginAtZero: true,
            fontColor: "#555759",
            fontFamily: "Lato",
            fontSize: 16,
          },
          scaleLabel: {
            display: true,
            padding: 40,
            fontFamily: "Lato",
            fontColor: "#555759",
            fontSize: 18,
            fontStyle: 700,
            labelString: "Scale Label",
          },
        },
      ],
    },
  },
});
