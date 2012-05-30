$(document).ready(function() {
	
	// Make the widget Elements and rows to be draggable
	$( ".widgetElementIcons" ).draggable({
		revert: true
	});
	
	$( ".widgetHolderRow" ).draggable({
		connectToSortable: "#contentSortable",
		helper: "clone",
		revert: true
	});
	
	// Make the content to be re-sorted vertically (Ignored the y-axis handling thing)
	$("#contentSortable").sortable({
		revert: false
	});
	
	// Left Nav Bar Show
	$(".left_nav").mouseenter(function(){
		$(".widgetElementIcons").show();
		$(".widgetHolderIcons").show();
	});
	
	// Left Nav Bar Hide
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
				// Hide Nav Bar here manually in case certain operations take too long to respond.
				$(".widgetElementIcons").hide();
				$(".widgetHolderIcons").hide();
				
				// Get the Row type and then retrieve the corresponding HTML code for different row type.
				ui.draggable.removeClass('widgetHolderRow');
				ui.draggable.addClass('contentRow');
				var type = getRowType(ui.helper);
				var new_row = getRowHtmlString(type);

				ui.draggable.empty();
				ui.draggable.html(new_row);
				
				/*
				 * Options for jQuery droppable, used when a widget is dropped in a container.
				 * Get the dragged widget ID and add the widget into the dropped section.
				 */
				ui.draggable.find('.widgetHolder').each(function() {				
					$(this).droppable({
						accept: '.widgetElementIcons',
						hoverClass: 'drop',
						activeClass: 'acceptable',
						drop: function(event, ui) {
							$(this).removeClass('widgetHolder');
							return addGoogleChart($(this), ui.draggable.attr('id'));
						}
					});
				});
			}
			
	    }
	});
});

/*
 * Depending on the widgetID value/name, it constructs the HTML IFRAME for different widgets
 * and attach it into the specified section.
 */
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

/*
 * @type (int)	: Index of a widgetRow
 * @return		: HTML Snippets of the corresponding Index
 */
getRowHtmlString = function(type) {
	switch (type) {
		case ('1'):
			return 	"<div class='widgetHolder size1of1 flt_left' ></div>"+
					"<div class='close' >"+
						"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
					"</div>";
		case ('2'):
			return 	"<div class='widgetHolder mrm size2of3 flt_left' ></div>"+
					"<div class='widgetHolder size1of3 flt_left' ></div>"+
					"<div class='close' >"+
							"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
					"</div>";	
		case ('3'):
			return 	"<div class='widgetHolder mrm size1of3 flt_left' ></div>"+
					"<div class='widgetHolder size2of3 flt_left' ></div>"+
					"<div class='close' >"+
							"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
					"</div>";	
		case ('4'):
			return 	"<div class='widgetHolder mrm size1of3 flt_left' ></div>"+
					"<div class='widgetHolder mrm size1of3 flt_left' ></div>"+
					"<div class='widgetHolder size1of3 flt_left' ></div>"+
					"<div class='close' >"+
							"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
					"</div>";	
		case ('5'):
			return 	"<div class='widgetHolder mrm size1of2 flt_left' ></div>"+
					"<div class='widgetHolder size1of2 flt_left' ></div>"+
					"<div class='close' >"+
							"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
					"</div>";						
	}
};

/*
 * Function that removes a contentRow widget container
 */
removeRow = function(removeButton) {
	$(removeButton).parent().parent().remove(); 
	return false;
};
