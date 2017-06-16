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

$(function(){
  $('a[href^=#]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);

    $('.menu > a').removeClass('here');
    $(this).addClass('here');

    $('main > div[id!=koma]').addClass('invisible');
    $('main > div[class*=now]').removeClass('fadeIn now').fadeOut();
    $(href).removeClass('invisible').removeClass('fadeOut').addClass('now').fadeIn();
    return false;
  });
});

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
