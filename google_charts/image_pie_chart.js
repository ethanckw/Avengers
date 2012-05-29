function drawVisualization() {
  // Create and populate the data table.
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',        11],
        ['Eat',         2],
        ['Commute',     2],
        ['Watch TV',    2],
        ['Sleep',       7]
    ]);

  // Create and draw the visualization.
    new google.visualization.ImagePieChart(document.getElementById('visualization')).
        draw(data, null);
}
