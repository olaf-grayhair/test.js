// POPUP //
$('.open-popup').click(function(e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(800);
  $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
  $('.popup-bg').fadeOut(800);
  $('html').removeClass('no-scroll');
});
$('.popup-bg').click(function (e) {
  if (!$(e.target).closest(".popup-inner").length) {
    $('.popup-bg').fadeOut(600);
  }
});
$(document).keydown(function(e) {
  if (e.keyCode === 27) {
    e.stopPropagation();
    $('.popup-bg').fadeOut();
  }
});
// POPUP //