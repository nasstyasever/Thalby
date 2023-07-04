$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ['', ' '],

        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            },
            1064: {
                items: 3
            }
        }

    });
});