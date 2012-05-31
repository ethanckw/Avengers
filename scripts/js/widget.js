var cl = function (val) { console.log(val); }; // debug line

$(document).ready(function() {

    // open and remember
    if ($.cookie('navopen') == 1) {
	showMenu();
	$('#navswitch').html("&larr;");
    } else {
	hideMenu();
	$('#navswitch').html("&rarr;");
    }

    // TODO : remember widget holder
    if (1 === 1) {
	var abc = '<div id="trial" class="rowtype_3 ui-draggable contentRow">'+getRowHtmlString('3')+'</div>';
	$('#contentSortable').append(abc);
	$('#trial').children('.pc').css({'width':$('#contentSortable').width()-15, 'float':'left'});
	updateRow();
	doDroppable();
	
    }

    // TODO : remember widget box
    if (1 === 1) {
	var obj = $('#wh_1');
	var ui = {
	    'draggable' : {
		'context': {
		    'title': 'Data Table',
		    'img' : 'report_sprite.png',
		    'imgPos': '0 113px',
		    'imgPosHover': '0px 56px',
		    'wwidth' : '100%',
		    'wheight' : '150px',
		    'url' : 'google_charts/intensity_map.html'
		}
	    }
	};
	obj.html(wbox(ui));

	populateWBox('wh_1', ui);
	refreshWBox(obj);
    }

    //widgets
    $( ".widgetHolderRow" ).draggable({
	connectToSortable: "#contentSortable",
	helper: "clone",
	revert: true
    });
	
    $("#contentSortable").sortable({
	revert: false
    });

    $('#navswitch').click(function() {
	if ($.cookie('navopen') == null || $.cookie('navopen') == 0) {
	    $.cookie('navopen', 1);
	    showMenu();
	    $('#navswitch').html("&larr;");
	} else {
	    $.cookie('navopen', 0);
	    hideMenu();
	    $('#navswitch').html("&rarr;");
	}
    });

    // leftnav hover
    $(".left_nav").mouseenter(function(){
	if ($.cookie('navopen') == 0) {
	    showMenu();
	}
    });

    // leftnav mouseout
    $(".left_nav").mouseleave(function(){
	if ($.cookie('navopen') == 0) {
	    hideMenu();
	}
    });

    //drop area for widget holder
    $('#contentSortable').droppable({
	revert: "false",
	accept: '.widgetHolderRow',
	drop: function(event, ui){
	    if(ui.helper.hasClass('widgetHolderRow')){
		ui.draggable.removeClass('widgetHolderRow');
		ui.draggable.addClass('contentRow');

		$.cookie('navopen', 0);
		hideMenu();

		var type = getRowType(ui.helper);
		var new_row = getRowHtmlString(type);

		ui.draggable.empty();
		ui.draggable.html(new_row);

		ui.draggable.children('.pc').width($('#contentSortable').width()-15).css({'float':'left'});

		updateRow();
		doDroppable();
	    }
	}
    });

    // ??
    $( ".widget-frame" ).sortable({
	revert: true,
	handle: '.drag_handle',
	axis: 'y'
    });
});

doDroppable = function() {
    // drop aread for widget [drop2]
    $('.widgetHolder').droppable({
	revert: "false",
	accept: '.widgetElementIcons',
	drop: function(event, ui) {
	    if(ui.helper.hasClass('widgetElementIcons')) {
		var type = getRowType(ui.helper);
		var me = $(this);
		var meid = me.attr('id'); // theres other way!

		me.html(wbox(ui));
		populateWBox(meid, ui);
		refreshWBox($(this));

		delete me;
		delete meid; // incase!
	    }
	}
    });
}

// resize widget holder space
// to lazy to do it properly, refactor later if we have time
doResize = function(type, total, mini) {
    var size = (mini === 1)?2:10; // pixel
    var totBorder = (mini === 1)?4:4; // widget holder bordersize

    switch(type) {
    case ('1'): // 1/1
	return (total - totBorder);
    case ('2'): // 1/2
	return (((total-size) / 2) - totBorder);
    case ('3'): // 1/3
	return (((total-(size * 2)) / 3) - totBorder);
    case ('4'): // 2/3
	return (((((total-(size * 2)) / 3) * 2) + size) - totBorder);
    }
}

// update widget holder size
updateRow = function () {
    var total = $('#contentSortable').width()-15;
    $('.size1of1').width(doResize('1', total, 0));
    $('.size1of2').width(doResize('2', total, 0));
    $('.size1of3').width(doResize('3', total, 0));
    $('.size2of3').width(doResize('4', total, 0));

    // assign id on each place holder row
    $('.pc').each(function(k, v) {
	var type = $(this).attr('class').substr(8, 1); // cheating! i know ;)
	$(this).attr('id', 'hr_' + (k+1) + '_' + type);
    });
    updateHolderId();
}

// update widget preview on left nav
updateMenu = function () {
    var total = $('.widgetHolderIconsContainer').width();
    $('.size1of1i').width(doResize('1', total, 1));
    $('.size1of2i').width(doResize('2', total, 1));
    $('.size1of3i').width(doResize('3', total, 1));
    $('.size2of3i').width(doResize('4', total, 1));
}

// update unique id
updateHolderId = function () {
    $('.widgetHolder').each(function (k, v) {
	$(this).attr('id', 'wh_' + (k + 1));
    });
}

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
	return "<div class='rowtype_1 contentRow pc'>"+
	    "<div class='widgetHolder size1of1' ></div>"+
	    "</div>"+
	    "<div class='close' >"+
	    "<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
	    "</div>";
    case ('2'):
	return "<div class='rowtype_2 contentRow pc'>"+
	    "<div class='widgetHolder mrm size2of3' ></div>"+
	    "<div class='widgetHolder size1of3' ></div>"+
	    "</div>"+
	    "<div class='close' >"+
	    "<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
	    "</div>";
    case ('3'):
	return "<div class='rowtype_3 contentRow pc'>"+
	    "<div class='widgetHolder mrm size1of3' ></div>"+
	    "<div class='widgetHolder size2of3' ></div>"+
	    "</div>"+
	    "<div class='close' >"+
	    "<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
	    "</div>";
    case ('4'):
	return "<div class='rowtype_4 contentRow pc'>"+
	    "<div class='widgetHolder mrm size1of3' ></div>"+
	    "<div class='widgetHolder mrm size1of3' ></div>"+
	    "<div class='widgetHolder size1of3' ></div>"+
	    "</div>"+
	    "<div class='close' >"+
	    "<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
	    "</div>";
    case ('5'):
	return "<div class='rowtype_5 contentRow pc'>"+
	    "<div class='widgetHolder mrm size1of2' ></div>"+
	    "<div class='widgetHolder size1of2' ></div>"+
	    "</div>"+
	    "<div class='close' >"+
	    "<a class='uiCloseButton' onclick='return removeRow(this);' ></a>"+
	    "</div>";
    }
};

removeRow = function(removeButton) {
    $(removeButton).parent().parent().remove();
    return false;
};

showMenu = function() {
    $(".left_nav").css({'background-color':'', 'width':'300px'});
    $(".widgetHolderIconsContainer").show();
    $(".widgetsContainer").show();
    $(".widgetElementIcons").show();
    $(".widgetHolderIcons").show();
    $('.widgetHolderIconsContainer').css({'border':'1px dashed silver', 'padding':'5px'});
    $('.widgetsContainer').css({
	'border':'1px dashed silver',
	'padding':'15px 15px 0',
	'margin-top':'10px',
	'height': ($('.left_nav').height() - ($('.navswitch').height() + $('.widgetHolderIconsContainer').height() + 7))
    });
    updateMenu();
}

hideMenu = function() {
    $(".left_nav").css({'background-color':'#B0C4DE', 'width':'8px'});
    $(".widgetHolderIconsContainer").hide();
    $(".widgetsContainer").hide();
    $(".widgetElementIcons").hide();
    $(".widgetHolderIcons").hide();
    $('.widgetHolderIconsContainer').css({'border':'0', 'padding':'0'});
    $('.widgetsContainer').css({'border':'0', 'padding':'0'});
    updateMenu();
}