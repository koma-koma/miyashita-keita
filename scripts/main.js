// $(function(){
//   $('a[href^=#]').click(function(){
//     var speed = 800;
//     var href= $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top - 60;
//     $("html, body").animate({scrollTop:position}, speed, "swing");
//     $('.menu > a').removeClass('here');
//     $(this).addClass('here');
//     return false;
//   });
// });



$(function() {
  console.log("test");
  var hash = location.hash;

  $('.menu > a').removeClass('here');
  $(this).addClass('here');

  $('main > div[id!=koma]').addClass('invisible');
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



// $(function() {
//
//     var urlHash = location.hash;
//     if (urlHash) {
//       alert.('test');
//
//       $('.menu > a').removeClass('here');
//       $(this).addClass('here');
//
//       $('main > div[id!=koma]').addClass('invisible');
//       $('main > div[class*=now]').removeClass('fadeIn now').fadeOut();
//       $(urlHash).removeClass('invisible').removeClass('fadeOut').addClass('now').fadeIn();
//     }
//
// });

// スクロール値でメニューの色変えたい
// $(function() {
//   var
//   var href= $(this).attr("href");
//   var target = $(href == "#" || href == "" ? 'html' : href);
//   var position = target.offset().top;
//   $("html, body").animate({scrollTop:position}, speed, "swing");
//   $('.menu > a').removeClass('here');
//   $(this).addClass('here');
// })
