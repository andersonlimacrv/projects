function GeraGraficoSaturacao() {
  const contextSaturacao = document
    .getElementById("grafico_saturacao_ar")
    .getContext("2d");

  const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const data = {
    labels,
    datasets: [
      {
        data: [99, 33, 40, 15, 39, 22, 33, 55, 44, 99],
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      resposive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        title: {
          display: true,
          text: "Saturação do Ar",
          color: "rgba(255,255,255,.8)",
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Condensadores",
            color: "rgba(255,255,255,.5)",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Saturação na saída (%)",
            color: "rgba(255,255,255,.5)",
          },
        },
      },
    },
  };

  const myChart = new Chart(contextSaturacao, config);
}
