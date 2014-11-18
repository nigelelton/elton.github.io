
var $win = $(window);
var $heroSection = $('.hero-section');

$win.on('scroll', function () {
  var scrollPos = $win.scrollTop();

  $heroSection.css('background-position', 'center ' + scrollPos /2.5 + 'px');
});

var fixed_nav_start = $('#about').position().top ;
$win.scroll(function () {
    if( $(this).scrollTop() > fixed_nav_start ){
        $('.hero-section nav').addClass('fixed-nav');
    }else{
        $('.hero-section nav').removeClass('fixed-nav');
    }
});