var $win = $(window);
var $heroSection = $('.hero-section');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$heroSection.css('background-position', 'center ' + scrollPos /2.5 + 'px');
});