function logoSIze() {
	var window_height = $(window).height();
	var window_width = $(window).width();
	if (window_height < 530 && window_width > 640) {
		$('.logo-wrapper img').css('width', '20px');
		$('.logo-wrapper img').css('display', 'inline-block');
	}
	if (window_height < 350 && window_width > 640) {
		$('.logo-wrapper img').css('width', '15px');
		$('.logo-wrapper img').css('display', 'inline-block');
	}
	if (window_height > 530 && window_width > 640) {
		$('.logo-wrapper img').css('width', '30px');
		$('.logo-wrapper img').css('display', 'inline-block');
	}
	if (window_height < 280 && window_width > 640) {
		$('.logo-wrapper img').css('display', 'none');
	}
	if (window_width < 640) {
		$('.logo-wrapper img').css('width', '100%');
	}
}

$(window).load(function() {
	//
});

$(document).ready(function () {
	// Foundation JS activation
	$(document).foundation();
	$(document).foundation('equalizer', 'reflow');

 	logoSIze();
});

$(window).resize(function () {
	logoSIze();
});
