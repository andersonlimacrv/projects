google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawAnnotations2);

function drawAnnotations2() {
  var data2 = google.visualization.arrayToDataTable([
    ["Condensadores", "IEE", "IEE - Real"],
    ["CD 1", 99071.6, 167003.2],
    ["CD 2", 62902.6, 71606.8],
    ["CD 3", 50322.1, 21994.6],
    ["CD 4", 62902.6, 48285.7],
    ["CD 5", 54347.8, 21365.6],
    ["CD 6", 99071.6, 167003.2],
    ["CD 7", 62902.6, 71606.8],
    ["CD 8", 50322.1, 21994.6],
    ["CD 9", 62902.6, 48285.7],
    ["CD 10", 54347.8, 21365.6],
    ["CD 11", 99071.6, 167003.2],
    ["CD 12", 62902.6, 71606.8],
    ["CD 13", 50322.1, 21994.6],
    ["CD 14", 62902.6, 48285.7],
    ["CD 15", 54347.8, 21365.6],
  ]);

  var options2 = {
    title: "Comparativo de Eficiência dos Condensadores 2",
    colors: ["#007AF7", "#CC0033"],
    titleTextStyle: {
      color: "#F1F1F1",
      fontName: "Arial",
      fontSize: 22,
      bold: "true",
    },
    legend: {
      position: "top",
      alignment: "center",
      textStyle: {
        color: "#f1f1f1",
        fontSize: 10,
      },
    },
    chartArea: {
      backgroundColor: "none",
    },
    backgroundColor: {
      fill: "none",
    },
    bar: { groupWidth: "70%" },
    vAxis: {
          /* format:"decimal", */
      gridlines: {
        color: "#4F4F4F",
      },
      minorGridlines: {
        color: "#262D47",
      },
      textStyle: {
        color: "#F1F1F1",
      },
      title: "IEE (Kcal/KWh)",
      titleTextStyle: {
        color: "#F1F1F1",
        fontName: "Arial",
        fontSize: 16,
      },
    },
    hAxis: {
      textStyle: {
        color: "#f1f1f1",
      },
    },
  };

  var chart = new google.charts.Bar(
    document.getElementById("grafico_comparativo_eficiencia_condensadores_2")
  );
  chart.draw(data2, google.charts.Bar.convertOptions(options2));
}
window.addEventListener("resize", drawAnnotations2);
