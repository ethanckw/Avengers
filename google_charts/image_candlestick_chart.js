// imagechart
function drawVisualization() {
  // Populate the data table.
    dataTable = google.visualization.arrayToDataTable([
        ['GOOG', 90, 100, 110, 120],
        ['MSFT', 70, 80, 90, 100],
        ['ORCL', 50, 60, 70, 80],
        ['AAPL', 20, 30, 40, 50],
        ['IBM',  15, 45, 35, 55],
        ['INTC', 10, 20, 30, 40]
  // Treat first row as data as well.
    ], true);

  // Draw the chart.
    var chart = new google.visualization.ImageCandlestickChart(document.getElementById('visualization'));
    chart.draw(dataTable, {width: 400});
}
