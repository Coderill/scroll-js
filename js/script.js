var env = $('#scroll-env');

env.on('click', 'a[href^="#"]', function(event) {
	var anchor 		= $(this),
		target 		= $($(this).attr('href')),
		duration 	= 800,
		effect 		= 'easeInOutQuad';

	if( target.length ) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: (target.offset().top - env.outerHeight())
		}, duration, effect, function() {
			env.find('a').removeClass('active');
			anchor.addClass('active');
		});
	}
});
