function drawVisualization() {
  // Create and populate the data table.
    var data = google.visualization.arrayToDataTable([
        ['Name',                                                                 'Manager', 'Tooltip'],
        ['Mike',                                                                 null,      'The President'],
        [{v: 'Jim', f: 'Jim<br/><font color="red"><i>Vice President<i></font>'}, 'Mike',    null],
        ['Alice',                                                                'Mike',    null],
        ['Bob',                                                                  'Jim',     'Bob Sponge'],
        ['Carol',                                                                'Bob',     null]
    ]);

  // Create and draw the visualization.
    new google.visualization.OrgChart(document.getElementById('visualization')).
        draw(data, {allowHtml: true});
}
