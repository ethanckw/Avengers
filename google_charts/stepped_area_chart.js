// corechart
function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
        ['Alfred Hitchcock (1935)', 8.4,         7.9],
        ['Ralph Thomas (1959)',     6.9,         6.5],
        ['Don Sharp (1978)',        6.5,         6.4],
        ['James Hawes (2008)',      4.4,         6.2]
    ]);

    var options = {
        width: 600, height: 400,
        title: 'The decline of \'The 39 Steps\'',
        vAxis: {title: 'Accumulated Rating'},
        isStacked: true
    };

    var chart = new google.visualization.SteppedAreaChart(document.getElementById('visualization'));
    chart.draw(data, options);
}
