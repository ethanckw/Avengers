function drawVisualization() {
  // Create and populate the data table.
    var data = google.visualization.arrayToDataTable([
        ['Name', 'Height', 'Smokes'],
        ['Tong Ning mu', 174, true],
        ['Huang Ang fa', 523, false],
        ['Teng nu', 86, true]
    ]);

  // Create and draw the visualization.
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, null);
}
