google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
  var data = google.visualization.arrayToDataTable([
    ["Condensadores", "Salto Entálpico (kJ/kg)"],
    ["CD 1", 25],
    ["CD 2", 22],
    ["CD 3", 30],
    ["CD 4", 15],
    ["CD 5", 18],
    ["CD 6", 21],
    ["CD 7", 29],
    ["CD 8", 22],
    ["CD 9", 29],
    ["CD 10", 34],
    ["CD 11", 31],
    ["CD 12", 29],
    ["CD 13", 22],
    ["CD 14", 20],
    ["CD 15", 35],
  ]);

  var options = {
    title: "Ganho Energético do Ar",
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
    dataOpacity: 0.9,
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
      title: "Salto Entálpico (kJ/kg)",
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
    document.getElementById("grafico_ganho_energetico_ar")
  );
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
window.addEventListener("resize", drawAnnotations);
