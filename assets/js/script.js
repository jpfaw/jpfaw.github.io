/* ===================================================================

 * ヘッダの余白設定

=================================================================== */
$(function () {
    var headerMarginTop = parseInt($('header').css('margin-top'), 10);
    var navHeight = $('nav').outerHeight(true);
    $('header').css({
        'margin-top': navHeight + headerMarginTop
    });
});

/* ===================================================================

 * ナビゲーションの設定

=================================================================== */
$(function ($) {
    $('html').smoothscroll({
        easing: 'swing',
        speed: 1000,
        margintop: 30,
        headerfix: $('nav')
    });
    $('.totop').scrollshow({
        position: 500
    });
    $('.slide').slideshow({
        touch: false,
        bgImage: true,
        autoSlide: true,
        effect: 'fade',
        repeat: true,
        easing: 'swing',
        interval: 5000,
        duration: 1000,
        imgHoverStop: false,
        navHoverStop: false,
        navImg: false,
        navImgCustom: false,
        navImgSuffix: ''
    });
});
