// imagechart
function drawVisualization() {
    var options = {};
      // Chart API chart type 'rs' is radar chart
    options.cht = 'rs';

      // set the line colors
    options.colors = ['#00FF00' , '#FF00FF'];

      // fill the area under the lines
    options.fill = true;

      // create a grid for the chart
    options.chg = '25.0,25.0,4.0,4.0';

    var pi = '\u03C0';
    dataTable = google.visualization.arrayToDataTable([
        ['0', 10, 100],
        [pi + '/4', 20, 80],
        [pi + '/2', 30, 60],
        ['3' + pi + '/4', 40, 30],
        [pi, 50, 25],
        ['5' + pi + '/4', 60, 20],
        ['3' + pi + '/2', 70, 10],
        ['7' + pi + '/4', 80, 5]
      // Treat first row as data as well.
    ], true);

    var chart = new google.visualization.ImageChart(document.getElementById('visualization'));
    chart.draw(dataTable, options);
}
