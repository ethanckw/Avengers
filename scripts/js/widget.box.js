var wbox = function(obj) {
    return $('.frameholder').html();
}

var populateWBox = function(id, obj) {
    var info = obj.draggable.context;

    var url = (info.url === undefined)?info.getAttribute('url'):info.url;
    var height = (info.wheight === undefined)?info.getAttribute('wheight'):info.wheight;
//    var url = (info.url === undefined)?info.getAttribute('url'):info.url;

    $('#' + id + ' div.widget-title').html(info.title);
    $('#' + id + ' div.widget-body-content').css({
	'height': height
    });


    createWBoxFrame(id, url);

    // attach action button
    $("#" + id + " .widget-action-refresh").unbind('click').click(function() { // close
	refreshWBoxFrame(id, url);
    });

    $("#" + id + " .widget-action-close").unbind('click').click(function() { // close
	// refactor fahmi?
	$(this).parent().parent().parent().parent().parent().css('border-color', '');
	$(this).parent().parent().parent().parent().css('border-color', '').remove();
    });
}

var refreshWBox = function(box) {
    box.css('border-color', '#FFF');
}

var closeWBox = function(box) { // not use it, 
    box.css('border-color', '#E2E2E2');
}

var createWBoxFrame = function(id, url) {
    var style = "width: 100%;"
	    + "height: 100%;"
	    + "border: 0;"
	    + "overflow: hidden;"
	    + "";

    doWBoxLoading(id); // do loading

    $('#' + id + ' .widget-body-content').html(
	'<object '
	    + 'id="if-' + id + '" '
	    + 'style="' + style + '" '
	    + 'data=""'
	    + 'tyle="text/html"'
	    + '></object>'
    );

    refreshWBoxFrame(id, url); // time to refresh
};

var refreshWBoxFrame = function(id, url) {
    doWBoxLoading(id); // do loading

    $("#if-" + id).attr('data', url).ready(function() {
	setTimeout(function() { // for mocking purpose
	    $('#' + id + ' .widget-body-overlay').hide();
	}, 2500);
    });
}

var doWBoxLoading = function(id) {
    var bc = $('#' + id + ' .widget-body-content');
    var bo = $('#' + id + ' .widget-body-overlay');

    bo.css({
	'top': bc.position().top,
	'left': bc.position().left,
	'height': bc.height(),
	'width': bc.width()
    }).show();
};

