function drawVisualization() {
  // Create and populate the data table.
    var data = google.visualization.arrayToDataTable([
        ['Revenue', 'Licenses'],
        [435, 132],
        [438, 131],
        [512, 137],
        [460, 142],
        [491, 140],
        [487, 139],
        [552, 147],
        [511, 146],
        [505, 151],
        [509, 149]
    ]);

  // Create and draw the visualization.
    new google.visualization.ImageSparkLine(
        document.getElementById('visualization')).draw(data, null);
}
