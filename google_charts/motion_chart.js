// motionchart
function drawVisualization() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Fruit');
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Sales');
    data.addColumn('number', 'Expenses');
    data.addColumn('string', 'Location');
    data.addRows([
        ['Apples', new Date(1988,0,1), 1000, 300, 'East'],
        ['Oranges', new Date(1988,0,1), 950, 200, 'West'],
        ['Bananas', new Date(1988,0,1), 300, 250, 'West'],
        ['Apples', new Date(1988,1,1), 1200, 400, 'East'],
        ['Oranges', new Date(1988,1,1), 900, 150, 'West'],
        ['Bananas', new Date(1988,1,1), 788, 617, 'West']
    ]);

    var motionchart = new google.visualization.MotionChart(
        document.getElementById('visualization'));
    motionchart.draw(data, {'width': 800, 'height': 400});
}
