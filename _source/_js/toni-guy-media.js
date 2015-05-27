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
	if (window_height < 290 && window_width > 640) {
		$('.logo-wrapper img').css('display', 'none');
	} else {
		$('.logo-wrapper img').css('display', 'inline-block');
	}
	if (window_width < 640) {
		$('.logo-wrapper img').css('width', '100%');
	}
}

function openWNav() {
	$('a.toggle').addClass('active');
	$('.copy .copy-wrapper').css('display', 'none');
	$('nav').css('display', 'table');
	$('nav').css('width', '100%');

	setTimeout(function()
	{
		var shown = $('.menu > li:first');
	    shown.css('display','block').hide().fadeIn('slow').delay(5);
	    setInterval(function(){
		    if(shown.next().length){
			    shown = shown.next();
			    shown.css('display','block').hide().fadeIn('slow').delay(5);
		    }
	    },15);
	}, 250);
}

function closeNav() {
	$('a.toggle').removeClass('active');
	$('.menu > li').css('display', 'none');
	$('nav').css('display', 'none');
	$('nav').css('width', '0px');
	//$('.nav').animate({width: '0px'}, 1000);
	$('.copy .copy-wrapper').css('display', 'table-cell');
}

$(window).load(function() {
	//
});

$(document).ready(function () {
	var opened = false;
	// Foundation JS activation
	$(document).foundation();
	$(document).foundation('equalizer', 'reflow');
 	logoSIze();

 	//Navigation animation
 	$( 'a.toggle' ).click(function() {
 		if (!opened) {
 			openWNav();
 			opened = true;
 		} else {
 			closeNav();
 			opened = false;
 		}
 	});
 	// Clsoe navigation if clicked on a background image
 	$( '.background-image' ).click(function() {
 		if (opened) {
 			closeNav();
 			opened = false;
 		} 
 	});
});

$(window).resize(function () {
	logoSIze();
});
