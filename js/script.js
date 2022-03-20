// トップページスライドショー
$('.slider').slick({
    fade:true,
    autoplay:true,
    autoplayspeed:5000,
    speed:3000,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:false,
    dots:false,
    infinite:true,
    pauseOnHover:false,
})

// ハンバーガーメニュー
$('.nav_toggle').on('click', function () {
  $('.nav_toggle, .nav').toggleClass('show');
});



// ナビゲーションのフェード設定
$(function(){
    var pos = 0;
    var header = $('.header');
    
    $(window).on('scroll', function(){
      if($(this).scrollTop() < pos ){
        //上にスクロールしたとき
        header.removeClass('hide');
      }else{
        //下にスクロールしたとき
        header.addClass('hide');
      }
      pos = $(this).scrollTop();
    });
  });

  // ナビゲーションがトップのみ変化
$(function(){
    var topheader = $('.headertop');
    var header = $('.header');
    header.hide();

    $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
          header.fadeIn();
          topheader.fadeOut();
        } else {
          topheader.fadeIn();
          header.fadeOut();
        };
    });
});


//   全要素のフェードイン設定
$(function (){
    $(window).scroll(function (){
        const wHight = $(window).height();
        const scrollAmount = $(window).scrollTop();

        let buffer;
        if ($(window).width() > 768){
            buffer = 300;
        } else{
            buffer = 100;
        }

        $('.element').each(function(){
            const targetPosition = $(this).offset().top;
            if (scrollAmount > targetPosition - wHight + buffer){
                $(this).addClass("is-fadein");
                console.log(buffer);
            }
        });
    });
});


// 要素間の境界wavify(うまく行ってない)
  $('#wave').wavify({
    height: 60,
    bones: 2,
    amplitude: 35,
    color: '#fffadf',
    speed: .25,
  });