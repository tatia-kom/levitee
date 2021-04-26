$(document).ready(function(e) {
    $(window).scroll(function(e) {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('header--scroll');

            if ($(window).scrollTop() > $('#startMenu').offset().top) {
                $('.header-menu').addClass('header-menu--visible');
            }
            else {
                $('.header-menu').removeClass('header-menu--visible');
            }
        }
        else {
            $('.header').removeClass('header--scroll');
        }
    });

    $('.header-menu').click(function(e) {
        e.preventDefault();

        $(this).toggleClass('header-menu--active');
        $('.menu-screen').toggleClass('menu-screen--active');
        $('body').toggleClass('fixed');
    });

    if ($(window).width() < 768) {
        $('.footer-menu__title').click(function (e) {
            $(this).toggleClass('footer-menu__title--active');
            $(this).parents('.footer-menu__column').find('.footer-menu__list').slideToggle();
        });
    }

    $('.tel-input').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().slideUp();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').slideUp();
            $(this).addClass('open');
            $(this).next().slideDown();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().slideUp();
        $(this).parent().prev().addClass('select__item--full').text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').slideUp();
        }
    });
});





