$('.sponsors__carousel').owlCarousel({
    loop: true,
    margin: 60,
    nav: false,
    dotsEach: 1,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 5
        }
    }
})