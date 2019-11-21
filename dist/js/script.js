var charImage = $('.characteristics .container .main-char-img img'),
    charContentRight = $('.characteristics .container .char-content-right'),
    serviceImg = $('.services .service-img');

charImage.each(function() {
    $(this).parents('.col-md-4').next('.col-md-4').find('.char-content-right').css('paddingTop', ($(this).height() / 2) + 30);
    $(this).parents('.col-md-4').prev('.col-md-4').find('.char-content').css('paddingTop', ($(this).height() / 2) - $(this).parents('.col-md-4').prev('.col-md-4').find('a.char-title').innerHeight() + 40);
});

serviceImg.each(function() {
    $(this).parents('.col-md-4').next('.col-md-4').find('.request-service').css('paddingTop', ($(this).height()) - $(this).parents('.col-md-4').next('.col-md-4').find('.request-service').innerHeight());
    $(this).parents('.col-md-4').prev('.col-md-4').find('.service-brief').css('paddingTop', ($(this).height()) - $(this).parents('.col-md-4').prev('.col-md-4').find('.service-brief').innerHeight());
});

new WOW().init();

$(window).scroll(function() {
    if($(this).scrollTop() > 800) {
        $('.scroll-top-button').css('right', '20px');
    } else {
        $('.scroll-top-button').css('right', '-200px');
    }
});

$('.scroll-top-button').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});