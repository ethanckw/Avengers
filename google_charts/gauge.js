// meta package=gauge
function drawVisualization() {
  // Create and populate the data table.
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Memory', 80],
        ['CPU', 55],
        ['Network', 68]
    ]);

  // Create and draw the visualization.
    new google.visualization.Gauge(document.getElementById('visualization')).
        draw(data);
}
