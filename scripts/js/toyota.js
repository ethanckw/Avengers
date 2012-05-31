function tick(){
		$('#tweet_ticker li:first').slideUp( function () { $(this).appendTo($('#tweet_ticker')).slideDown(); });
}

/**
	 * USE TWITTER DATA
	 */

	 $.ajax ({
		 url: 'http://search.twitter.com/search.json',
		 data: 'q=%23toyota',
		 dataType: 'jsonp',
		 timeout: 10000,
		 success: function(data){
		 	if (!data.results){
		 		return false;
		 	}

		 	for( var i in data.results){
		 		var result = data.results[i];
		 		var $res = $("<li />");
		 		$res.append('<img src="' + result.profile_image_url + '" />');
		 		$res.append(result.text);

		 		console.log(data.results[i]);
		 		$res.appendTo($('#tweet_ticker'));
		 	}
			setInterval(function(){ tick() }, 1000);	

			$('#tweets').show();

		 }
	});