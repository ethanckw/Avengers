// corechart
function drawVisualization() {
    // Create and populate the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Shape 1');
    data.addColumn('number', 'Shape 2');
    for (var i = 0; i < 500; ++i) {
        data.addRow([Math.sin(i / 5) * 0.25, Math.cos(i / 25), null])
    }
    for (var i = 0; i < 500; i++) {
        data.addRow([Math.sin(i / 25), null, Math.cos(i / 10) * 0.5]);
    }

    // Create and draw the visualization.
    var chart = new google.visualization.ScatterChart(
        document.getElementById('visualization'));
    chart.draw(data, {title: 'Cool shapes',
                      width: 600, height: 400,
                      vAxis: {title: "Y", titleTextStyle: {color: "green"}},
                      hAxis: {title: "X", titleTextStyle: {color: "green"}}}
              );
}
