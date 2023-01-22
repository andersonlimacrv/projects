const ctx = document.getElementById("grafico_TBU_admissao_ar");

const labels = ["1", "2", "3", "4", "5", "6"];

const data = {
  labels,
  datasets: [
    {
      data: [350, 200, 300, 400, 500],
      label: "Nome do Gráfico",
    },
  ],
};
const config = {
  type: "bar",
  data,
  options: {
    responsive: true,
  },
};
const drawChart = new Chart(ctx, config);
