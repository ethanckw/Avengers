// imagechart
function drawVisualization() {
  // Create and populate the data table.
    var data = google.visualization.arrayToDataTable([
        ['Name', 'Height', 'Smokes'],
        ['Tong Ning mu', 174, true],
        ['Huang Ang fa', 523, false],
        ['Teng nu', 86, true]
    ]);

    var options = {};

  // 'bhg' is a horizontal grouped bar chart in the Google Chart API.
  // The grouping is irrelevant here since there is only one numeric column.
    options.cht = 'bhg';

  // Add a data range.
    var min = 0;
    var max = 700;
    options.chds = min + ',' + max;

  // Now add data point labels at the end of each bar.

  // Add meters suffix to the labels.
    var meters = 'N** m';

  // Draw labels in pink.
    var color = 'ff3399';

  // Google Chart API needs to know which column to draw the labels on.
  // Here we have one labels column and one data column.
    // The Chart API doesn't see the label column.  From its point of view,
  // the data column is column 0.
    var index = 0;

  // -1 tells Google Chart API to draw a label on all bars.
    var allbars = -1;

  // 10 pixels font size for the labels.
    var fontSize = 10;

    // Priority is not so important here, but Google Chart API requires it.
    var priority = 0;

    options.chm = [meters, color, index, allbars, fontSize, priority].join(',');

  // Create and draw the visualization.
    new google.visualization.ImageChart(document.getElementById('visualization')).
        draw(data, options);
}
