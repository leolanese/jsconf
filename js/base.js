function featureFocus(_this){
	// CHECK SECTION IS NOT ACTIVE
	if (!(_this.hasClass('focus'))){

		// REASSIGN FOCUS TO RELEVANT SECTION
		$('.feature-section').removeClass('focus');
		_this.addClass('focus');

		if($('.container').width() > 767){
			//--- NON-MOBILE ---//
			// EMPTY INFO DIV
			$('#cc-feature-focus-info').empty();
			// ADD INFORMATION TO INFO DIV
			$('.feature-info', _this).clone().appendTo('#cc-feature-focus-info');
			// RESET SIZE OF INFO TEXT
			$('.feature-info p.lead', '#cc-feature-focus-info').removeClass('five');
			$('.feature-info p.lead', '#cc-feature-focus-info').addClass('six');
			// SHOW INFO DIV
			$('.feature-info', '#cc-feature-focus-info').slideDown(0);
			$('.feature-info', '#cc-feature-focus-info').removeClass('ninja');
		}else{
			//--- MOBILE --//
			// SHOW/HIDE RELEVANT INFORMATION
			$('.feature-info').hide();
			$('.feature-info', _this).slideDown(400);

		};
	}
}

$(document).ready(function(){

	// FEATURE FOCUS SECTION SELECTION
	$('.container .feature-section').bind('click',function(){
		var _this = $(this);
		featureFocus(_this);
	});

	// DISPLAY GRID OVERLAY
	$('#grid-display').bind('click',function(){
		$('#grid-overlay').toggleClass('ninja');
		$(this).toggleClass('active');
	});

	// BIND 'FEATURE FOCUS' EVENT TO WINDOW RESIZE W/ TIMEOUT
	var rtime = new Date(1, 1, 2000, 12,00,00);
	var timeout = false;
	var diff = 200;
	$(window).resize(function(){
		// HIDE ALL INFORMATION
		$('.feature-info').slideUp(0);
		$('#cc-feature-focus-info').empty();
	    rtime = new Date();
	    if(timeout === false){
	        timeout = true;
	        setTimeout(resizeEnd, diff);
	    }
	});
	function resizeEnd(){
	    if(new Date() - rtime < diff){
	        setTimeout(resizeEnd, diff);
	    }else{
	        timeout = false;
	        // MARK ACTIVE SECTION AND RE-TRIGGER
	        var activeFocus = $('.focus');
	        $('.feature-section').removeClass('focus');
			featureFocus(activeFocus);
		}               
	}

	// TRIGGER CLICK ON FIRST 'FEATURE FOCUS' ITEM ON PAGE LOAD
	$('.container .feature-section:first').trigger('click');

});