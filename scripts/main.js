$(function(){
  $('a[href^=#]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 60;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    $('.menu > a').removeClass('here');
    $(this).addClass('here');
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
