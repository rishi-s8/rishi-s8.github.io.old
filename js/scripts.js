/*
  Here goes the JAVASCRIPT
*/

$(function() {
  $('.fa-phone').hover(function() {
    $('.popup').css('opacity', '1');
    $('.popup').css('transform', 'scale(1)');
    $('.popup').css('-webkit-transform', 'scale(1)');
  }, function() {
    // on mouseout, reset the background colour
    $('.popup').css('opacity', '0');
    $('.popup').css('transform', 'scale(0)');
    $('.popup').css('-webkit-transform', 'scale(0)');
  });
});
