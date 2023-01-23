let ctx = document.getElementById("grafico_TBU_admissao_ar").getContext('2d');

let labels = ["1", "2", "3", "4", "5"];

let data = {
  labels,
  datasets: [
    {
      data: [22, 33, 55, 44, 99],
      data2: [11, 20,45, 55, 33],
      label: "nome do gráfico",
    },
  ],
};

let config = {
  type: "bar",
  data,
  options: {
    resposive: true,
  },
};

let myChart = new Chart(ctx, config);
