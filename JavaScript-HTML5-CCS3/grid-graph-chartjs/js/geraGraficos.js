function GeraGraficoEficienciaCondensadores() {
  const contextCapacidade = document
    .getElementById("grafico_comparativo_capacidade_condensadores")
    .getContext("2d");

  const labels = ["1", "2", "3", "4", "5"];
  const data = {
    labels,
    datasets: [
      {
        data: [22, 33, 55, 44, 99],
        label: "Capacidade Medida",
        backgroundColor: ["rgba(0, 160, 255)"],
        borderColor: ["rgba(15,15,130,1)"],
        borderWidth: 0.5,
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      resposive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Comparativo Capacidade Condensadores",
            color: "rgba(255,255,255,.8)",
            font: {
              family: "Arial",
              size: 20,
              weight: "bold",
              lineHeight: 1.2,
            },
            padding: { top: 10, left: 0, right: 0, bottom: 10 },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
            color: "rgba(255,255,255,.8)",
            font: {
              family: "Times",
              size: 20,
              style: "normal",
              lineHeight: 1.2,
            },
            padding: { top: 5, left: 0, right: 0, bottom: 0 },
          },
        },
      },
    },
  };

  const myChart = new Chart(contextCapacidade, config);
}
function GeraGraficoComparativoCondensadores() {
  const contextEficienciaEnergetica = document
    .getElementById("grafico_comparativo_eficiencia_energetica")
    .getContext("2d");

  const labels = ["1", "2", "3", "4", "5"];

  const data = {
    labels,
    datasets: [
      {
        data: [22, 33, 55, 44, 99],
        label: "IEE Medido",
        backgroundColor: ["rgba(0, 160, 255)"],
        borderColor: ["rgba(15,15,130,1)"],
        borderWidth: 0.5,
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      resposive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Comparativo Eficiencia Energetica",
            color: "rgba(255,255,255,.8)",
            font: {
              family: "Arial",
              size: 20,
              weight: "bold",
              lineHeight: 1.2,
            },
            padding: { top: 10, left: 0, right: 0, bottom: 10 },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
            color: "rgba(255,255,255,.8)",
            font: {
              family: "Times",
              size: 20,
              style: "normal",
              lineHeight: 1.2,
            },
            padding: { top: 5, left: 0, right: 0, bottom: 0 },
          },
        },
      },
    },
  };

  const myChart = new Chart(contextEficienciaEnergetica, config);
}
function GeraGraficoGanhoEnergéticoAr() {
  const contextGannhoEnergetico = document
    .getElementById("grafico_ganho_energetico_ar")
    .getContext("2d");

  const labels = ["1", "2", "3", "4", "5"];
  const data = {
    labels,
    datasets: [
      {
        data: [22, 33, 55, 44, 99],
        label: "Ganho Energético do Ar",
        backgroundColor: ["rgba(0, 160, 255)"],
        borderColor: ["rgba(15,15,130,1)"],
        borderWidth: 0.5,
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      resposive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Comparativo Capacidade Condensadores",
            color: "rgba(255,255,255,.8)",
            font: {
              family: "Arial",
              size: 20,
              weight: "bold",
              lineHeight: 1.2,
            },
            padding: { top: 10, left: 0, right: 0, bottom: 10 },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
            color: "rgba(255,255,255,.8)",
            font: {
              family: "Times",
              size: 20,
              style: "normal",
              lineHeight: 1.2,
            },
            padding: { top: 5, left: 0, right: 0, bottom: 0 },
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

  const labels = ["1", "2", "3", "4", "5"];
  const data = {
    labels,
    datasets: [
      {
        data: [22, 33, 55, 44, 99],
        label: "Saturação do Ar",
        backgroundColor: ["rgba(0, 160, 255)"],
        borderColor: ["rgba(15,15,130,1)"],
        borderWidth: 0.5,
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      resposive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Comparativo Capacidade Condensadores",
            color: "rgba(255,255,255,.8)",
            font: {
              family: "Arial",
              size: 20,
              weight: "bold",
              lineHeight: 1.2,
            },
            padding: { top: 10, left: 0, right: 0, bottom: 10 },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
            color: "rgba(255,255,255,.8)",
            font: {
              family: "Times",
              size: 20,
              style: "normal",
              lineHeight: 1.2,
            },
            padding: { top: 5, left: 0, right: 0, bottom: 0 },
          },
        },
      },
    },
  };

  const myChart = new Chart(contextSaturacao, config);
}
function GeraGraficoTBU() {
  const contextGraficoTBU = document
    .getElementById("grafico_TBU_admissao_ar")
    .getContext("2d");

  const labels = ["1", "2", "3", "4", "5"];

  const data = {
    labels,
    datasets: [
      {
        data: [13, 35, 56, 25, 21],
        label: "Tbu Admissão do Ar",
        backgroundColor: ["rgba(0, 160, 255)"],
        borderColor: ["rgba(15,15,130,1)"],
        borderWidth: 0.5,
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      resposive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Comparativo Capacidade Condensadores",
            color: "rgba(255,255,255,.8)",
            font: {
              family: "Arial",
              size: 20,
              weight: "bold",
              lineHeight: 1.2,
            },
            padding: { top: 10, left: 0, right: 0, bottom: 10 },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
            color: "rgba(255,255,255,.8)",
            font: {
              family: "Times",
              size: 20,
              style: "normal",
              lineHeight: 1.2,
            },
            padding: { top: 5, left: 0, right: 0, bottom: 0 },
          },
        },
      },
    },
  };

  const myChart = new Chart(contextGraficoTBU, config);
}
GeraGraficoEficienciaCondensadores();
GeraGraficoComparativoCondensadores();
GeraGraficoTBU();
GeraGraficoSaturacao();
GeraGraficoGanhoEnergéticoAr();
