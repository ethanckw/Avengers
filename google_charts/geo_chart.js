// meta package=geochart
function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ]);

    var geochart = new google.visualization.GeoChart(
        document.getElementById('visualization'));
    geochart.draw(data, {width: 556, height: 347});
}
