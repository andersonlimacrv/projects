google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
    var data = google.visualization.arrayToDataTable([
        ['CDs', 'Capacidade Nominal Corrida (kcal/h)', {role: 'style'}, 'Capacidade Medida (kcal/h)', {role: 'style'}],
        ['CD 1', 1052115, '#007af7',  414836, '#ff0000'],
        ['CD 2', 1186488, '#007af7',  1422971, '#ff0000'],
        ['CD 3', 885734, '#007af7',  388513, '#ff0000'],
        ['CD 4', 1066993, '#007af7',  852918, '#ff0000'],
        ['CD 5', 562948, '#007af7',  424578, '#ff0000'],
        ['CD 6', 1052115, '#007af7',  414836, '#ff0000'],
        ['CD 7', 1186488, '#007af7',  1422971, '#ff0000'],
        ['CD 8', 885734, '#007af7',  388513, '#ff0000'],
        ['CD 9', 1066993, '#007af7',  852918, '#ff0000'],
        ['CD 10', 562948, '#007af7',  424578, '#ff0000'],
        ['CD 11', 562948, '#007af7',  424578, '#ff0000'],
        ['CD 12', 1052115, '#007af7',  414836, '#ff0000'],
        ['CD 13', 1186488, '#007af7',  1422971, '#ff0000'],
        ['CD 14', 885734, '#007af7',  388513, '#ff0000'],
        ['CD 15', 1066993, '#007af7',  852918, '#ff0000'],
        
      ]);

      var options = {
        title: 'Comparativo de Eficiência dos Condensadores',
        colors: ['#007af7', '#ff0000'],
        titleTextStyle: {
              color: '#f1f1f1',
              fontName: 'Arial',
              fontSize: 22,
              bold: 'false'
        },
        legend: {         
            position: 'top',
            alignment: 'end',
            textStyle: {
              color:'#f1f1f1',
              fontSize: 14,
            },
        },
        chartArea: {
              backgroundColor: 'none',
              left: 120,
              width: 680,
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
              title: 'Capacidade (Kcal/h)',
              titleTextStyle: {
                  color: '#f1f1f1',
                  fontName: 'Arial',
                  fontSize: 16,
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

      var chart = new google.visualization.ColumnChart(document.getElementById('grafico_comparativo_eficiencia_condensadores'));
      chart.draw(data, options);
    }