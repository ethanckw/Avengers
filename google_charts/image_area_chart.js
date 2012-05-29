function drawVisualization() {
  // Create and populate the data table.
    var data = google.visualization.arrayToDataTable([
        ['Name', 'Height', 'Smokes'],
        ['Tong Ning mu', 174, true],
        ['Huang Ang fa', 523, false],
        ['Teng nu', 86, true]
    ]);

  // Create and draw the visualization.
    new google.visualization.ImageAreaChart(document.getElementById('visualization')).
        draw(data, null);
}
