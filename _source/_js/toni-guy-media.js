/*
|--------------------------------------------------------------------------
| Update the logo when the browser height is changed
|--------------------------------------------------------------------------
*/

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
		$('.copy-wrapper').addClass('height-padding');
	} else {
		$('.copy-wrapper').removeClass('height-padding');
	}
	if (window_height > 530 && window_width > 640) {
		$('.logo-wrapper img').css('width', '30px');
		$('.logo-wrapper img').css('display', 'inline-block');
	}
	if (window_height < 290 && window_width > 640) {
		$('.logo-wrapper img').css('display', 'none');
		$('.logo-holder-nav').css('display', 'block');
	} else {
		$('.logo-wrapper img').css('display', 'inline-block');
		$('.logo-holder-nav').css('display', 'none');
	}
	if (window_width < 640) {
		$('.logo-wrapper img').css('width', '100%');
	}
}

/*
|--------------------------------------------------------------------------
| Open navigation menu and apply animations
|--------------------------------------------------------------------------
*/

function openWNav() {
	if(Modernizr.csstransitions) { 
		$('a.toggle').addClass('active');
	} 
	var window_height = $(window).height();
	var window_width = $(window).width();
	$('.copy .copy-wrapper').css('display', 'none');
	$('.copy').addClass('menuactive');
	$('.background').addClass('menuactive');
	$('nav').addClass('active');

	if (window_height < 290 && window_width > 640) {
		$('.logo-holder-nav').css('display', 'block');
		$('.menu > li').css('display', 'block');
	} else {
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
	
}

/*
|--------------------------------------------------------------------------
| Close navigation menu 
|--------------------------------------------------------------------------
*/

function closeNav() {
	if(Modernizr.csstransitions) { 
		$('a.toggle').removeClass('active');
	} 
	$('.menu > li').css('display', 'none');
	$('.copy').removeClass('menuactive');
	$('.background').removeClass('menuactive');
	$('nav').removeClass('active');
	//$('.nav').animate({width: '0px'}, 1000);
	$('.copy .copy-wrapper').css('display', 'table-cell');
}

/*
|--------------------------------------------------------------------------
| Perform task when website is opened
|--------------------------------------------------------------------------
*/

$(window).load(function() {
	
});

/*
|--------------------------------------------------------------------------
| Perform functions when all documents finish downloading
|--------------------------------------------------------------------------
*/

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


/*
|--------------------------------------------------------------------------
| Perform tasks when window size is changed 
|--------------------------------------------------------------------------
*/

$(window).resize(function () {
	logoSIze();
});