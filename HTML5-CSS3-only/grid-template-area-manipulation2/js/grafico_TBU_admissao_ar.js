google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawAnnotations3);

function drawAnnotations3() {
  var data3 = google.visualization.arrayToDataTable([
    ["Condensadores", "TBU na entrada do Ar"],
    ["CD 1", 19],
    ["CD 2", 17],git s
    ["CD 3", 14],
    ["CD 4", 15],
    ["CD 5", 20],
    ["CD 6", 22],
    ["CD 7", 16],
    ["CD 8", 18],
    ["CD 9", 11],
    ["CD 10", 13],
    ["CD 11", 15],
    ["CD 12", 22],
    ["CD 13", 20],
    ["CD 14", 15],
    ["CD 15", 12],
  ]);

  var options3 = {
    animation: { startup: true, easing: "linear", duration: 1000 },
    title: "TBU na Admissão do Ar",
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
    bar: { groupWidth: "60%" },
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
      title: "TBU na entrada do Ar",
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
        color: "#f1f1f1",
      },
    },
  };

  var chart = new google.charts.Bar(
    document.getElementById("grafico_TBU_admissao_ar")
  );
  chart.draw(data3, google.charts.Bar.convertOptions(options3));
}
window.addEventListener("resize", drawAnnotations3);
