google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotations3);

function drawAnnotations3() {
    var data3 = google.visualization.arrayToDataTable([
        ['CDs', 'TBU na entrada do Ar', {role: 'style'}],
        ['CD 1', 19, '#007af7'],
        ['CD 2', 17, '#007af7'],
        ['CD 3', 14, '#007af7'],
        ['CD 4', 15, '#007af7'],
        ['CD 5', 20, '#007af7'],
        ['CD 6', 22, '#007af7'],
        ['CD 7', 16, '#007af7'],
        ['CD 8', 18, '#007af7'],
        ['CD 9', 11, '#007af7'],
        ['CD 10', 13, '#007af7'],
        ['CD 11', 15, '#007af7'],
        ['CD 12', 22, '#007af7'],
        ['CD 13', 20, '#007af7'],
        ['CD 14', 15, '#007af7'],
        ['CD 15', 12, '#007af7'],
      ]);

      var options3 = {
        title: 'TBU na Admissão do Ar',
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
            title: 'TBU na entrada do Ar',
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

      var chart = new google.visualization.ColumnChart(document.getElementById('grafico_TBU_admissao_ar'));
      chart.draw(data3, options3);
    }