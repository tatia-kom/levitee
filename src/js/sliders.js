$(document).ready(function() {


    if ($('.advantages__slider').length > 0) {

        $('.owl-carousel').owlCarousel({
            loop:true,
            items: 3,
            autoWidth: true,
            center: true,
            nav: false,
            dots: true,
            smartSpeed: 700,
            dotsSpeed: 700,
            dragEndSpeed: 700
        });

        $('.advantages__slider .advantages-item').click(function (e) {
            const id = $(this).attr('data-slide');

            //advantagesSlider.slick('slickGoTo', id-1);
            $('.owl-carousel').trigger('to.owl.carousel', id-1);
        });

    };

});