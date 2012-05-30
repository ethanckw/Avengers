$(document).ready(function() {
	
	//widgets
	$( ".widgetElementIcons" ).draggable({
		revert: true
	});
	
	$( ".widgetHolderRow" ).draggable({
		connectToSortable: "#contentSortable",
		helper: "clone",
		revert: true
	});
	
	$("#contentSortable").sortable({
		revert: false
	});
	
	$(".left_nav").mouseenter(function(){
		$(".widgetElementIcons").show();
		$(".widgetHolderIcons").show();
	});
	
	$(".left_nav").mouseleave(function(){
		$(".widgetElementIcons").hide();
		$(".widgetHolderIcons").hide();
	});
	
	//drop area
	$('#contentSortable').droppable({
		revert: "false",
		accept: '.widgetHolderRow',
		drop: function(event, ui){
			if(ui.helper.hasClass('widgetHolderRow')){
				ui.draggable.removeClass('widgetHolderRow');
				ui.draggable.addClass('contentRow');
				$(".widgetElementIcons").hide();
				$(".widgetHolderIcons").hide();
				var type = getRowType(ui.helper);
				var new_row = getRowHtmlString(type);

				ui.draggable.empty();
				ui.draggable.html(new_row);
				ui.draggable.find('.widgetHolder').each(function() {
				
				/*
				 * Options for jQuery droppable, used when a widget is dropped in a container.
				 * Get the dragged widget ID and add the widget into the dropped section.
				 */
					$(this).droppable({
						accept: '.widgetElementIcons',
						hoverClass: 'drop',
						activeClass: 'acceptable',
						drop: function(event, ui) {
							$(this).removeClass('h60');
							$(this).removeClass('widgetHolder');
							return addGoogleChart($(this), ui.draggable.attr('id'));
						}
					});
				});
			}
			
	    }
	});
});

addGoogleChart = function(section, widgetId) {
	var html = '';
	switch (widgetId)
	{
		case 'CampaignTable': 	html =  '<iframe src="google_charts/annotated_timeline.html" style="width:100%; height: 400px;"></iframe>'; break;
		case 'CampaignLine': 	html =  '<iframe src="google_charts/area_chart.html" style="width:100%; height: 400px;"></iframe>'; break;
		case 'CampaignPie': 	html =  '<iframe src="google_charts/bar_chart.html" style="width:100%; height: 400px;"></iframe>'; break;
		case 'CampaignBar': 	html =  '<iframe src="google_charts/bubble_chart.html" style="width:100%; height: 400px;"></iframe>'; break;
		case 'CampaignChange': 	html =  '<iframe src="google_charts/candlestick_chart.html" style="width:100%; height: 400px;"></iframe>'; break;
		case 'Image': 			html =  '<iframe src="google_charts/column_chart.html" style="width:100%; height: 400px;"></iframe>'; break;
		case 'Heading': 		html =  '<iframe src="google_charts/gauge.html" style="width:100%; height: 400px;"></iframe>'; break;
		case 'Comment': 		html =  '<iframe src="google_charts/geo_chart.html" style="width:100%; height: 400px;"></iframe>'; break;
	}
	section.append(html);
};

/*
 * This method checks which row type place holder is dragged from the 
 * It reads the #ID of the element and extract out the rowtype_xx value
 * The xx value would be the type.
 */
getRowType = function(element){
	var elementIdArray = element.attr('class');
	elementIdArray = elementIdArray.split(' ');
	var type='';
	for (var i in elementIdArray) {
		if (elementIdArray[i].search('rowtype_') != -1) {
			type = elementIdArray[i].replace('rowtype_', '');
			return type;
		}
	}
	return type;
};

getRowHtmlString = function(type) {
	switch (type) {
		case ('1'):
			return 	"<div class='widgetHolder h60 size1of1 flt_left' ></div>"+
					"<div class='close' >"+
						"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
					"</div>";
		case ('2'):
			return 	"<div class='widgetHolder h60 mrm size2of3 flt_left' ></div>"+
					"<div class='widgetHolder h60 size1of3 flt_left' ></div>"+
					"<div class='close' >"+
							"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
					"</div>";	
		case ('3'):
			return 	"<div class='widgetHolder h60 mrm size1of3 flt_left' ></div>"+
					"<div class='widgetHolder h60 size2of3 flt_left' ></div>"+
					"<div class='close' >"+
							"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
					"</div>";	
		case ('4'):
			return 	"<div class='widgetHolder h60 mrm size1of3 flt_left' ></div>"+
					"<div class='widgetHolder h60 mrm size1of3 flt_left' ></div>"+
					"<div class='widgetHolder h60 size1of3 flt_left' ></div>"+
					"<div class='close' >"+
							"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
					"</div>";	
		case ('5'):
			return 	"<div class='widgetHolder h60 mrm size1of2 flt_left' ></div>"+
					"<div class='widgetHolder h60 size1of2 flt_left' ></div>"+
					"<div class='close' >"+
							"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
					"</div>";						
	}
};

removeRow = function(removeButton) {
	$(removeButton).parent().parent().remove(); 
	return false;
};
