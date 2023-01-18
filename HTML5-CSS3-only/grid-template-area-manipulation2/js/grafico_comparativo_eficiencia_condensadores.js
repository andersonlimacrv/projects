google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
  var data = google.visualization.arrayToDataTable([
    ["Condensadores", "Nominal", "Medida"],
    ["CD 1", 1052115, 923456],
    ["CD 2", 1186488, 1422971],
    ["CD 3", 885734, 388513],
    ["CD 4", 1066993, 852918],
    ["CD 5", 562948, 424578],
    ["CD 6", 1052115, 414836],
    ["CD 7", 1186488, 1422971],
    ["CD 8", 885734, 388513],
    ["CD 9", 1066993, 852918],
    ["CD 10", 562948, 424578],
    ["CD 11", 562948, 424578],
    ["CD 12", 1052115, 414836],
    ["CD 13", 1186488, 1422971],
    ["CD 14", 885734, 388513],
    ["CD 15", 1066993, 852918],
  ]);

  var options = {
    title: "Comparativo de Eficiência dos Condensadores",
    colors: ["#007AF7", "#CC0033"],
    titleTextStyle: {
      color: "#F1F1F1",
      fontName: "Arial",
      fontSize: 22,
      bold: "true",
    },
    legend: {
      alignment: "center",
      textStyle: {
        color: "#F1F1F1",
        fontSize: 10,
      },
    },
    chartArea: {
      backgroundColor: "none",
    },
    backgroundColor: {
      fill: "none",
    },
    dataOpacity: 0.3,
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
      title: "Capacidade (Kcal/h)",
      titleTextStyle: {
        color: "#F1F1F1",
        fontName: "Arial",
        fontSize: 16,
      },
    },
    hAxis: {
      textStyle: {
        color: "#F1F1F1",
      },
    },
  };
  var chart = new google.charts.Bar(
    document.getElementById("grafico_comparativo_eficiencia_condensadores")
  );
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
window.addEventListener("resize", drawAnnotations);
