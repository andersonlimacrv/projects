google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
  var data = google.visualization.arrayToDataTable([
    ["Condensadores", "Saturação do ar na saída (%)"],
    ["CD 1", 85],
    ["CD 2", 90],
    ["CD 3", 75],
    ["CD 4", 88],
    ["CD 5", 100],
    ["CD 6", 95],
    ["CD 7", 62],
    ["CD 8", 59],
    ["CD 9", 62],
    ["CD 10", 54],
    ["CD 11", 89],
    ["CD 12", 62],
    ["CD 13", 50],
    ["CD 14", 62],
    ["CD 15", 54],
  ]);

  var options = {
    title: "Saturação do Ar",
    colors: ["#007AF7"],
    titleTextStyle: {
      color: "#F1F1F1",
      fontName: "Arial",
      fontSize: 22,
      bold: "false",
    },
    legend: { position: "none" },
    chartArea: {
      backgroundColor: "none",
    },
    backgroundColor: {
      fill: "none",
    },
    dataOpacity: 0.8,
    bar: { groupWidth: "70%" },
    vAxis: {
      gridlines: {
        color: "#4F4F4F",
      },
      minorGridlines: {
        color: "#262D47",
      },
      textStyle: {
        color: "#F1F1F1",
      },
      title: "Saturação do ar na saída (%)",
      titleTextStyle: {
        color: "#F1F1F1",
        fontName: "Arial",
        fontSize: 17,
        bold: "false",
        italic: "false",
      },
    },
    hAxis: {
      textStyle: {
        color: "#F1F1F1",
      },
    },
  };

  var chart = new google.charts.Bar(
    document.getElementById("grafico_saturacao_ar")
  );
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
window.addEventListener("resize", drawAnnotations);
