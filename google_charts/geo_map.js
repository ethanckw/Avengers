// geomap
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

    var geomap = new google.visualization.GeoMap(
        document.getElementById('visualization'));
    geomap.draw(data, null);
}
