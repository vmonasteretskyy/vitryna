$(document).ready(function () {
    $('.burger-icon').click(function () {
        $('.header__menu').slideToggle();
    });

    $('.leftsb__categoryphonebtn').click(function () {
        $('.leftsb__category').slideToggle();
    });


    if ($('*').is('.slider-for')) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.slider-nav',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });
        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            focusOnSelect: true,
            arrows: false,
        });
    }











});