$(document).ready(function() {
	
	//widgets
	$( ".widgetElementIcons" ).draggable({
		connectToSortable: "#contentSortable",
		revert: true
	});
	
	$( ".widgetHolderRow" ).draggable({
		revert: true
	});
	
	$("#contentSortable").sortable({
		revert: true
	});
	
	$(".left_nav").mouseenter(function(){
		$(".widgetElementIcons").show();
		$(".widgetHolderIcons").show();
	});
	
	$(".left_nav").mouseleave(function(){
		$(".widgetElementIcons").hide();
		$(".widgetHolderIcons").hide();
	});
	
	
});

