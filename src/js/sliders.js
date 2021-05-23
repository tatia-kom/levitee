$(document).ready(function() {


    if ($('.advantages__slider').length > 0) {
        $('.advantages__slider').slick({
            arrows: true,
            dots: true,
            swipe: true,
            infinite: true,
            speed: 700,
            variableWidth: true,
            centerMode: true,
            slidesToShow: 3
        });
    };

});