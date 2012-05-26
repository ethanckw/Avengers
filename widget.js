$(document).ready(function() {
	
	//widgets
	$( ".widgetElementIcons" ).draggable({
		connectToSortable: "#contentSortable",
		helper: "clone",
		revert: "invalid"
	});
	
	$( ".widgetHolderRow" ).draggable({
		revert: true
	});
	
	$( ".contentRow" ).draggable({
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

