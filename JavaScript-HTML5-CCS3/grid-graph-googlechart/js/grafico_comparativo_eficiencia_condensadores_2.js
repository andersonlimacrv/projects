google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawAnnotations2);

function drawAnnotations2() {
  var data2 = google.visualization.arrayToDataTable([
    ["CDs", "IEE", { role: "style" }, "IEE - Real", { role: "style" }],
    ["CD 1", 99071.6, "#007af7", 167003.2, "#ff0000"],
    ["CD 2", 62902.6, "#007af7", 71606.8, "#ff0000"],
    ["CD 3", 50322.1, "#007af7", 21994.6, "#ff0000"],
    ["CD 4", 62902.6, "#007af7", 48285.7, "#ff0000"],
    ["CD 5", 54347.8, "#007af7", 21365.6, "#ff0000"],
    ["CD 6", 99071.6, "#007af7", 167003.2, "#ff0000"],
    ["CD 7", 62902.6, "#007af7", 71606.8, "#ff0000"],
    ["CD 8", 50322.1, "#007af7", 21994.6, "#ff0000"],
    ["CD 9", 62902.6, "#007af7", 48285.7, "#ff0000"],
    ["CD 10", 54347.8, "#007af7", 21365.6, "#ff0000"],
    ["CD 11", 99071.6, "#007af7", 167003.2, "#ff0000"],
    ["CD 12", 62902.6, "#007af7", 71606.8, "#ff0000"],
    ["CD 13", 50322.1, "#007af7", 21994.6, "#ff0000"],
    ["CD 14", 62902.6, "#007af7", 48285.7, "#ff0000"],
    ["CD 15", 54347.8, "#007af7", 21365.6, "#ff0000"],
  ]);

  var options2 = {
    title: "Comparativo de Eficiência dos Condensadores",
    colors: ["#007af7", "#ff0000"],
    titleTextStyle: {
      color: "#f1f1f1",
      fontName: "Arial",
      fontSize: 22,
      bold: "false",
    },
    legend: {
      position: "top",
      alignment: "end",
      textStyle: {
        color: "#f1f1f1",
        fontSize: 14,
      },
    },
    chartArea: {
      backgroundColor: "none",
      left: 100,
      width: 700,
      top: 60,
      bottom: 50,
    },
    backgroundColor: {
      fill: "none",
    },
    dataOpacity: 0.9,
    bar: { groupWidth: "65%" },
    vAxis: {
      gridlines: {
        color: "#f1f1f1",
      },
      minorGridlines: {
        color: "#262d47",
      },
      textStyle: {
        color: "#f1f1f1",
      },
      title: "IEE (Kcal/KWh)",
      titleTextStyle: {
        color: "#f1f1f1",
        fontName: "Arial",
        fontSize: 16,
        bold: "false",
        italic: "false",
      },
    },
    hAxis: {
      textStyle: {
        color: "#f1f1f1",
      },
    },
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("grafico_comparativo_eficiencia_condensadores_2")
  );
  chart.draw(data2, options2);
}
window.addEventListener("resize", drawAnnotations2);
