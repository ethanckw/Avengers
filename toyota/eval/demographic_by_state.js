// meta package=imagechart
// meta title=Toyota Sales by State
function drawVisualization(dataTable) {
    var dataTable = new google.visualization.DataTable();
    var vis = new google.visualization.ImageChart(document.getElementById('visualization'));
    var options = {
        chs: '440x220',
        cht: 't',
        chco: 'F5F5F5,EDF0D4,FBA576,D22E11',
        chld: 'AKALARAZCACOCTDEFLGAHIIAIDILINKSKYLAMAMDMEMIMNMOMSMTNCNDNENHNJNMNVNYOHOKORPARISCSDTNTXUTVAVTWAWIWVWY',
        chd: 't:10,70,1.639,1.639,0,1.639,16.393,4.918,3.279,1.639,1.639,1.639,0,16.393,4.918,6.557,3.279,29.508,0,26.23,4.918,1.639,25,9.836,18.033,18.033,0,0,6.557,29.508,14.754,4.918,6.557,25,9.836,26.23,1.639,9.836,3.279,0,3.279,8.197,20,1.639,4.918,24.59,1.639,11.475,66,0',
        chdl: '',
        chtm: 'usa'
    };
    vis.draw(dataTable, options);
}
