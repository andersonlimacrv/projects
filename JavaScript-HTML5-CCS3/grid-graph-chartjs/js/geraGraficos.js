function GeraGraficoCapacidadeCondensadores() {
  const contextEficienciaEnergetica = document
    .getElementById("grafico_comparativo_capacidade_condensadores")
    .getContext("2d");

  const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const data = {
    labels,
    datasets: [
      {
        data: [59, 35, 60, 50, 113, 33, 37, 63, 51, 103],
        label: "Capacidade Nominal (Kcal/h)",
        backgroundColor: ["rgba(0, 160, 255)"],
        borderColor: ["rgba(15,15,240,1)"],
        hoverBackgroundColor: "rgba(15,15,123,.8)",
        hoverBorderColor: "rgba(255,255,255,.8)",
      },
      {
        data: [55, 33, 55, 44, 99, 29, 33, 55, 44, 99],
        label: "Capacidade Medida (Kcal/h)",
        backgroundColor: ["rgba(200, 0, 32,0.8)"],
        borderColor: ["rgba(123, 0, 32,0.8)"],
        hoverBackgroundColor: "rgba(123, 0, 32,0.8)",
        hoverBorderColor: "rgba(255,255,255,.8)",
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      resposive: true,
      maintainAspectRatio: true,
      hoverBorderWidth: 4,
      borderRadius: 5,
      borderWidth: 0.8,
      plugins: {
        title: {
          display: true,
          text: "Comparativo Capacidade",
          color: "rgba(255,255,255,.8)",
          font: {
            family: "Arial",
            size: 20,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Condensadores",
            color: "rgba(255,255,255,.5)",
            font: {
              family: "Arial",
              size: 16,
              weight: "bold",
              lineHeight: 1.2,
            },
            padding: { top: 0, left: 0, right: 0, bottom: 5 },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Capacidade (Kcal /h)",
            color: "rgba(255,255,255,.5)",
            font: {
              family: "Arial",
              size: 16,
              style: "normal",
              lineHeight: 1.2,
            },
            padding: { top: 5, left: 5, right: 5, bottom: 5 },
          },
        },
      },
    },
  };

  const myChart = new Chart(contextEficienciaEnergetica, config);
  window.addEventListener("beforeprint", () => {
    myChart.resize();
  });
  window.addEventListener("afterprint", () => {
    myChart.resize();
  });
}
function GeraGraficoEficienciaCondensadores() {
  const contextCapacidade = document
    .getElementById("grafico_comparativo_eficiencia_energetica")
    .getContext("2d");

  const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const data = {
    labels,
    datasets: [
      {
        data: [55, 33, 55, 44, 99, 29, 33, 55, 44, 99],
        label: "IEE - Nominal",
        backgroundColor: ["rgba(0, 160, 255)"],
        borderColor: ["rgba(15,15,240,1)"],
        hoverBackgroundColor: "rgba(15,15,123,.8)",
        hoverBorderColor: "rgba(255,255,255,.8)",
      },
      {
        data: [50, 28, 50, 39, 94, 24, 27, 50, 39, 94],
        label: "IEE - Real",
        backgroundColor: ["rgba(200, 0, 32,0.8)"],
        borderColor: ["rgba(123, 0, 32,0.8)"],
        hoverBackgroundColor: "rgba(123, 0, 32,0.8)",
        hoverBorderColor: "rgba(255,255,255,.8)",
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      hoverBorderWidth: 4,
      borderRadius: 5,
      borderWidth: 0.8,
      resposive: true,
      maintainAspectRatio: true,
      plugins: {
        title: {
          display: true,
          text: "Comparativo Índice de Eficiência Energética",
          color: "rgba(255,255,255,.8)",
          font: {
            family: "Arial",
            size: 20,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Condensadores",
            color: "rgba(255,255,255,.5)",
            font: {
              family: "Arial",
              size: 16,
              weight: "bold",
              lineHeight: 1.2,
            },
            padding: { top: 0, left: 0, right: 0, bottom: 5 },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "IEE(Kcal /KWh)",
            color: "rgba(255,255,255,.5)",
            font: {
              family: "Arial",
              size: 16,
              style: "normal",
              lineHeight: 1.2,
            },
            padding: { top: 5, left: 5, right: 5, bottom: 5 },
          },
        },
      },
    },
  };

  const myChart = new Chart(contextCapacidade, config);
}
function GeraGraficoTBU() {
  const contextGraficoTBU = document
    .getElementById("grafico_TBU_admissao_ar")
    .getContext("2d");

  const gradient = contextGraficoTBU.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "#5CFFCA");
  gradient.addColorStop(1, "#6688CA");

  const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const data = {
    labels,
    datasets: [
      {
        data: [13, 35, 56, 25, 21, 13, 35, 56, 25, 21],
        label: "Tbu Admissão",
        backgroundColor: gradient,
        borderColor: ["rgba(15,15,240,1)"],
        hoverBackgroundColor: "rgba(15,15,123,.8)",
        hoverBorderColor: "rgba(255,255,255,.8)",
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      resposive: true,
      maintainAspectRatio: true,
      hoverBorderWidth: 4,
      borderRadius: 5,
      borderWidth: 0.8,
      plugins: {
        title: {
          display: true,
          text: "T.B.U. Admissão do Ar",
          color: "rgba(255,255,255,.8)",
          font: {
            family: "Arial",
            size: 20,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Condensadores",
            color: "rgba(255,255,255,.5)",
            font: {
              family: "Arial",
              size: 16,
              weight: "bold",
              lineHeight: 1.2,
            },
            padding: { top: 0, left: 0, right: 0, bottom: 5 },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Temp. de Bulbo Úmido(°C)",
            color: "rgba(255,255,255,.5)",
            font: {
              family: "Arial",
              size: 16,
              style: "normal",
              lineHeight: 1.2,
            },
            padding: { top: 5, left: 5, right: 5, bottom: 5 },
          },
        },
      },
    },
  };

  const myChart = new Chart(contextGraficoTBU, config);
}
function GeraGraficoGanhoEnergéticoAr() {
  const contextGannhoEnergetico = document
    .getElementById("grafico_ganho_energetico_ar")
    .getContext("2d");

  const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const data = {
    labels,
    datasets: [
      {
        data: [22, 33, 55, 44, 99, 22, 33, 55, 44, 99],
        label: "Ganho Energético",
        backgroundColor: ["rgba(0, 160, 255)"],
        borderColor: ["rgba(15,15,240,1)"],
        hoverBackgroundColor: "rgba(15,15,123,.8)",
        hoverBorderColor: "rgba(255,255,255,.8)",
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      resposive: true,
      maintainAspectRatio: true,
      hoverBorderWidth: 4,
      borderRadius: 5,
      borderWidth: 0.8,
      plugins: {
        title: {
          display: true,
          text: "Ganho energético do Ar",
          color: "rgba(255,255,255,.8)",
          font: {
            family: "Arial",
            size: 20,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Condensadores",
            color: "rgba(255,255,255,.5)",
            font: {
              family: "Arial",
              size: 16,
              weight: "bold",
              lineHeight: 1.2,
            },
            padding: { top: 0, left: 0, right: 0, bottom: 5 },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Salto Entálpico (kJ/Kg)",
            color: "rgba(255,255,255,.5)",
            font: {
              family: "Arial",
              size: 16,
              style: "normal",
              lineHeight: 1.2,
            },
            padding: { top: 5, left: 5, right: 5, bottom: 5 },
          },
        },
      },
    },
  };

  const myChart = new Chart(contextGannhoEnergetico, config);
}
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
        label: "Saturação",
        backgroundColor: ["rgba(0, 160, 255)"],
        borderColor: ["rgba(15,15,240,1)"],
        borderWidth: 0.8,
        hoverBackgroundColor: "rgba(15,15,123,.8)",
        hoverBorderColor: "rgba(255,255,255,.8)",
        hoverBorderWidth: 4,
        borderRadius: 5,
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      resposive: true,
      maintainAspectRatio: true,
      plugins: {
        title: {
          display: true,
          text: "Saturação do Ar",
          color: "rgba(255,255,255,.8)",
          font: {
            family: "Arial",
            size: 20,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Condensadores",
            color: "rgba(255,255,255,.5)",
            font: {
              family: "Arial",
              size: 16,
              weight: "bold",
              lineHeight: 1.2,
            },
            padding: { top: 0, left: 0, right: 0, bottom: 5 },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Saturação na saída (%)",
            color: "rgba(255,255,255,.5)",
            font: {
              family: "Arial",
              size: 16,
              style: "normal",
              lineHeight: 1.2,
            },
            padding: { top: 5, left: 5, right: 5, bottom: 5 },
          },
        },
      },
    },
  };

  const myChart = new Chart(contextSaturacao, config);
}
GeraGraficoCapacidadeCondensadores();
GeraGraficoEficienciaCondensadores();
GeraGraficoTBU();
GeraGraficoGanhoEnergéticoAr();
GeraGraficoSaturacao();
window.addEventListener("beforeprint", () => {
  myChart.resize();
});
window.addEventListener("afterprint", () => {
  myChart.resize();
});
