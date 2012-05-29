var wrapper;

function init() {
    wrapper = new google.visualization.ChartWrapper({
        dataSourceUrl: 'https://spreadsheets.google.com/spreadsheet/tq?key=tnxuU73jT7eIL-aZke85e3A&pub=1&range=A1:E13',
        containerId: 'visualization',
        chartType: 'LineChart'
    });
    wrapper.draw();
}

function openEditor() {
  // Handler for the "Open Editor" button.
    var editor = new google.visualization.ChartEditor();
    google.visualization.events.addListener(
        editor, 'ok',
        function() {
            wrapper = editor.getChartWrapper();
            wrapper.draw(document.getElementById('visualization'));
        }
    );
    editor.openDialog(wrapper);
}
