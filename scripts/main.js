
$(function() {
  var hash = location.hash;

  $('.menu > a').removeClass('here');
  $(this).addClass('here');

  $('main > div[class!=back]').addClass('invisible');
  $('main > div[class*=now]').removeClass('fadeIn now').fadeOut();
  $(hash).removeClass('invisible').removeClass('fadeOut').addClass('now').fadeIn();

  $('a[href^="#"]').click(function(){
    var href= $(this).attr("href");
    $('.menu > a').removeClass('here');
    $(this).addClass('here');

    $('main > div[id!=koma]').addClass('invisible');
    $('main > div[class*=now]').removeClass('fadeIn now').fadeOut();
    $(href).removeClass('invisible').removeClass('fadeOut').addClass('now').fadeIn();
  });
});
