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
            1100: {
                items: 3
            }
        }

    });
});