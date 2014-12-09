
var $win = $(window);
var $heroSection = $('.hero-section');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$heroSection.css('background-position', 'center ' + scrollPos /2.5 + 'px');
});

if( $('.nav-fixed').length ) {
	var fixed_nav_start = $('.nav-fixed').position().top - 100;

	$win.scroll(function () {
	    if( $(this).scrollTop() > fixed_nav_start ){
	        $('.hero-section nav').addClass('fixed-nav');
	    }else{
	        $('.hero-section nav').removeClass('fixed-nav');
	    }
	});

}
