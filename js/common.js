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
    // -
    $('.filter-section__time .title').click(function () {
        $('.check-section.check-section__time').slideToggle();
        $('.filter-section__time .title img').toggleClass('rotate');
    })

    $('.filter-section__region .titlereg').click(function () {
        $('.check-section.check-section__reg').slideToggle();
        $('.filter-section__region .titlereg img').toggleClass('rotate');
    });
    // // -
    // $('.subcheckdrop .subcheckdrop__more').click(function () {
    //     $('.check-section.check-section__reg .check-field:nth-child(n+5)').show();
    //     $(this).hide();
    //     $('.subcheckdrop .subcheckdrop__less').show();
    // });
    // $('.subcheckdrop .subcheckdrop__less').click(function () {
    //     $('.check-section.check-section__reg .check-field:nth-child(n+5)').hide();
    //     $(this).hide();
    //     $('.subcheckdrop .subcheckdrop__more').show();
    // });

    // filter phone
    $('.leftsb__filterphonebtn').click(function () {
        $('.filter-section').slideToggle();
        $('.leftsb__filterphonebtn img').toggleClass('rotate');
    });

    // select
    (function () {

        $('.language-dropdown').on('click', '.language-change a', function (ev) {
            if ("#" === $(this).attr('href')) {
                ev.preventDefault();
                var parent = $(this).parents('.language-dropdown');
                parent.find('.change-text').html($(this).html());
            }
        });

        $('.category-dropdown').on('click', '.category-change a', function (ev) {
            if ("#" === $(this).attr('href')) {
                ev.preventDefault();
                var parent = $(this).parents('.category-dropdown');
                parent.find('.change-text').html($(this).html());
            }
        });

    }());

});