google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
    var data = google.visualization.arrayToDataTable([
        ['CDs', 'Salto Entálpico (kJ/kg)', {role: 'style'}],
        ['CD 1', 25, '#007af7'],
        ['CD 2', 22, '#007af7'],
        ['CD 3', 30, '#007af7'],
        ['CD 4', 15, '#007af7'],
        ['CD 5', 18, '#007af7'],
        ['CD 6', 21, '#007af7'],
        ['CD 7', 29, '#007af7'],
        ['CD 8', 22, '#007af7'],
        ['CD 9', 29, '#007af7'],
        ['CD 10', 34, '#007af7'],
        ['CD 11', 31, '#007af7'],
        ['CD 12', 29, '#007af7'],
        ['CD 13', 22, '#007af7'],
        ['CD 14', 20, '#007af7'],
        ['CD 15', 35, '#007af7'],
      ]);

      var options = {
        title: 'Ganho Energético do Ar',
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
        bar: {groupWidth: "70%"},
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
            title: 'Salto Entálpico (kJ/kg)',
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

      var chart = new google.visualization.ColumnChart(document.getElementById('grafico_ganho_energetico_ar'));
      chart.draw(data, options);
    }