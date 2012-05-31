// meta package=corechart
function drawVisualization() {
  // Create and populate the data table.
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Austria', 'Bulgaria', 'Denmark', 'Greece'],
        ['2003',  1336060,    400361,    1001582,   997974],
        ['2004',  1538156,    366849,    1119450,   941795],
        ['2005',  1576579,    440514,    993360,    930593],
        ['2006',  1600652,    434552,    1004163,   897127],
        ['2007',  1968113,    393032,    979198,    1080887],
        ['2008',  1901067,    517206,    916965,    1056036]
    ]);

  // Create and draw the visualization.
    new google.visualization.BarChart(document.getElementById('visualization')).
        draw(data,
             {title:"Yearly Coffee Consumption by Country",
              width:600, height:400,
              vAxis: {title: "Year"},
              hAxis: {title: "Cups"}}
            );
}
