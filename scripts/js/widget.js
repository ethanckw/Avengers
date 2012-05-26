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
			}
			
	    }
	});
	
	$( ".widgetRow" ).sortable({
		revert: true,
		handle: '.drag_handle',
		axis: 'y'
	});
});

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
}

getRowHtmlString = function(type) {
	switch (type) {
		case ('1'):
			return "<div class='rowtype_1 contentRow'>"+
						"<div class='widgetHolder size1of1' ></div>"+
						"<div class='close' >"+
							"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
						"</div>"+
					"</div>";
		case ('2'):
			return "<div class='rowtype_2 contentRow'>"+
						"<div class='widgetHolder mrm size2of3' ></div>"+
						"<div class='widgetHolder size1of3' ></div>"+
						"<div class='close' >"+
								"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
						"</div>"+
					"</div>";	
		case ('3'):
			return "<div class='rowtype_3 contentRow'>"+
						"<div class='widgetHolder mrm size1of3' ></div>"+
						"<div class='widgetHolder size2of3' ></div>"+
						"<div class='close' >"+
								"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
						"</div>"+
					"</div>";	
		case ('4'):
			return "<div class='rowtype_4 contentRow'>"+
						"<div class='widgetHolder mrm size1of3' ></div>"+
						"<div class='widgetHolder mrm size1of3' ></div>"+
						"<div class='widgetHolder size1of3' ></div>"+
						"<div class='close' >"+
								"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
						"</div>"+
					"</div>";	
		case ('5'):
			return "<div class='rowtype_5 contentRow'>"+
						"<div class='widgetHolder mrm size1of2' ></div>"+
						"<div class='widgetHolder size1of2' ></div>"+
						"<div class='close' >"+
								"<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
						"</div>"+
					"</div>";						
	}
};

removeRow = function(removeButton) {
	$(removeButton).parent().parent().parent().remove(); 
	return false;
};
