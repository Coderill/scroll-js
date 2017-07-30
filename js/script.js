// set the environment
var env 				= $('#scroll-env'),
	screenPercentage 	= 30,
	duration 			= 800,
	effect 				= 'easeInOutQuad';

// make the menu item scrollable in click event
env.on('click', 'a[href^="#"]', function(event) {
	var anchor 			= $(this),
		target 			= $($(this).attr('href'));

	// check the target link exists or not
	if( target.length ) {
		event.preventDefault();

		// set the section scrollable with animation
		$('html, body').animate({
			scrollTop: (target.offset().top - env.outerHeight())
		}, duration, effect, function() {
			env.find('a').removeClass('active');
			anchor.addClass('active');
		});
	}
});

// select the anchor using the scroll
$(document).scroll(function() {
	var screenSize 			= $(window).height() * (screenPercentage / 100),
		scrollPosition 		= $(document).scrollTop() + screenSize;

	$("#scroll-env a").each(function() {
		var self 			= $(this),
			targetID 		= $(self.attr("href")),
			elementPosition = targetID.offset().top;

		if (targetID.position().top <= scrollPosition && (targetID.position().top + targetID.height()) > scrollPosition) {
           $("#scroll-env a").removeClass("active");
           self.addClass("active");
        }
	});
});
