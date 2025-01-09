let worksSwiper = new Swiper(".works-swiper", {
    spaceBetween: 17,
    slidesPerView:3,


    breakpoints: {
        320: {slidesPerView: 1.2,},
        370: {slidesPerView: 1.2,},
        400: {slidesPerView: 1.2,},
        610: {slidesPerView: 1.5,},
        814: {slidesPerView: 2.1},
        935: {slidesPerView: 2.5},
        1095: {slidesPerView: 3},
    },


});

let reviewsSwiper = new Swiper(".reviews-swiper", {
    spaceBetween: 17,
    slidesPerView:3,
    navigation: {
        nextEl: '.reviews-swiper-next',
        prevEl: '.reviews-swiper-prev',
    },



    breakpoints: {
        320: {slidesPerView: 1,},
        370: {slidesPerView: 1,},
        422: {slidesPerView: 1.2,},
        610: {slidesPerView: 1.5,},
        814: {slidesPerView: 2.1},
        935: {slidesPerView: 2.5},
        1107: {slidesPerView: 3},
    },


});

