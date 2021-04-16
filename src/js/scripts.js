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

    // modals

    $('.modal').click(function(e) {
        $(this).removeClass('modal--active');
        $('body').removeClass('fixed');
    });

    $('.close-modal').click(function(e) {
        $(this).parents('.modal').removeClass('modal--active');
        $('body').removeClass('fixed');
    });

    $('.modal__content').click(function(e) {
        e.stopPropagation();
    });

    $('.open-modal').click(function(e) {
        e.preventDefault();

        $('body').addClass('fixed');
        $('.modal--active').removeClass('modal--active');
        $($(this).attr('data-modal')).addClass('modal--active');
    });
});





