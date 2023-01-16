google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
    var data = google.visualization.arrayToDataTable([
        ['CDs', 'Saturação do ar na saída (%)', {role: 'style'}],
        ['CD 1', 85, '#007af7'],
        ['CD 2', 90, '#007af7'],
        ['CD 3', 75, '#007af7'],
        ['CD 4', 88, '#007af7'],
        ['CD 5', 100, '#007af7'],
        ['CD 6', 95, '#007af7'],
        ['CD 7', 62, '#007af7'],
        ['CD 8', 59, '#007af7'],
        ['CD 9', 62, '#007af7'],
        ['CD 10', 54, '#007af7'],
        ['CD 11', 89, '#007af7'],
        ['CD 12', 62, '#007af7'],
        ['CD 13', 50, '#007af7'],
        ['CD 14', 62, '#007af7'],
        ['CD 15', 54, '#007af7'],
      ]);

      var options = {
        title: 'Saturação do Ar',
        titleTextStyle: {
              color: '#f1f1f1',
              fontName: 'Arial',
              fontSize: 22,
              bold: 'false'
        },
        legend: 'none',
        chartArea: {
              backgroundColor: 'none',
              left: 80,
              width: 450,
              top: 60,
              bottom: 50,
        },
        backgroundColor: {
              fill: 'none',
        },
        dataOpacity: 0.9,
        bar: {groupWidth: "65%"},
        vAxis: {
            gridlines: {
                color: '#f1f1f1',                
              },
              minorGridlines: {
                color: '#262d47'
            },
              textStyle: {
                color: '#f1f1f1'
              },  
            title: 'Saturação do ar na saída (%)',
            titleTextStyle: {
                color: '#f1f1f1',
                fontName: 'Arial',
                fontSize: 17,
                bold: 'false',
                italic: 'false'
          },
        },
        hAxis: {
              textStyle: {
                color: '#f1f1f1',
                
              },
              
        },      
};

      var chart = new google.visualization.ColumnChart(document.getElementById('grafico_saturacao_ar'));
      chart.draw(data, options);
    }
    window.addEventListener("resize", drawAnnotations);