

gsap.registerPlugin(ScrollTrigger);
const isTablet = window.innerWidth < 1200;

gsap.fromTo('.possibilities-item--one',
    { y: 0 },
    {
        y: isTablet ? -40 : 0,
        scrollTrigger: {
            trigger: '.possibilities-section',
            start: "top top",
            end: "top+=100 top",
            scrub: true,
        }
    }
);

gsap.to('.possibilities-item--one', {
    scale: 0.9,
    opacity: 0,
    scrollTrigger: {
        trigger: '.possibilities-item--two', // Следующая карточка
        start: "top+=60% center", // Начало перекрытия на 60%
        end: "top+=50% center", // Конец перекрытия на 80%
        scrub: true,
    }
});

gsap.fromTo('.possibilities-item--two',
    { y: 0 },
    {
        y: isTablet ? -443 : -370,
        scrollTrigger: {
            trigger: '.possibilities-section',
            start: "top top",
            end: "top+=200 top",
            scrub: true,
        }
    }
);

gsap.to('.possibilities-item--two', {
    scale: 0.9,
    opacity: 0,
    scrollTrigger: {
        trigger: '.possibilities-item--tree', // Следующая карточка
        start: "top+=0% center", // Начало перекрытия на 60%
        end: "top+=20 center", // Конец перекрытия на 80%
        scrub: true,
    }
});

gsap.fromTo('.possibilities-item--tree',
    { y: 0 },
    {
        y: isTablet ? -846 : -740,
        scrollTrigger: {
            trigger: '.possibilities-section',
            start: "top+=200 top",
            end: "top+=300 top",
            scrub: true,
        }
    }
);

gsap.to('.possibilities-item--tree', {
    scale: 0.9,
    opacity: 0,
    scrollTrigger: {
        trigger: '.possibilities-item--for', // Следующая карточка
        start: "top-=320 center", // Начало перекрытия на 60%
        end: "top+=40 center", // Конец перекрытия на 80%
        scrub: true,
    }
});

gsap.fromTo('.possibilities-item--for',
    { y: 0 },
    {
        y: isTablet ? -1248 : -1120,
        scrollTrigger: {
            trigger: '.possibilities-section',
            start: "top+=200 top",
            end: "top+=400 top",
            scrub: true,
        }
    }
);

gsap.to('.possibilities-item--for', {
    scale: 0.9,
    opacity: 0,
    scrollTrigger: {
        trigger: '.possibilities-item--five', // Следующая карточка
        start: "top-=650 center", // Начало перекрытия на 60%
        end: "top+=50% center", // Конец перекрытия на 80%
        scrub: true,
    }
});

gsap.fromTo('.possibilities-item--five',
    { y: 0 },
    {
        y: isTablet ? -1650 : -1490,
        scrollTrigger: {
            trigger: '.possibilities-section',
            start: "top+=400 top",
            end: "top+=500 top",
            scrub: true,
        }
    }
);

gsap.to('.possibilities-item--five', {
    scale: 0.9,
    opacity: 0,
    scrollTrigger: {
        trigger: '.possibilities-item--six', // Следняя карточка
        start: "top-=850 center", // Начало перекрытия на 60%
        end: "top+=50% center", // Конец перекрытия на 80%
        scrub: true,
    }
});

gsap.fromTo('.possibilities-item--six',
    { y: 0 },
    {
        y: isTablet ? -2054 : -1860,
        scrollTrigger: {
            trigger: '.possibilities-section',
            start: "top+=600 top",
            end: "top+=600 top",
            scrub: true,
        }
    }
);

gsap.to('.possibilities-item--six', {
    scrollTrigger: {
        trigger: '.possibilities-section', // Нет следующей карточки
        start: "top+=60% center", // Начало перекрытия на 60%
        end: "top+=80% center", // Конец перекрытия на 80%
        scrub: true,
    }
});


















//
// gsap.fromTo('.possibilities-item--for',
//     { y: 0 },
//     {
//         y: isTablet ? -1248 : -1115 ,
//         scrollTrigger: {
//
//             trigger: '.possibilities-section',
//             start: "top+=300 top",
//             end: "top+=400 top",
//             scrub: true,
//         }
//     }
// );
//
//
//
//
//
// gsap.fromTo('.possibilities-item--five',
//     { y: 0 },
//     {
//         y: isTablet ? -1650 : -1480,
//         scrollTrigger: {
//             trigger: '.possibilities-section',
//             start: "top+=400 top",
//             end: "top+=500 top",
//             scrub: true,
//         }
//     }
// );
//
// gsap.fromTo('.possibilities-item--six',
//     { y: 0 },
//     {
//         y: isTablet ? -2054 : -1850, // Увеличиваем на 200 для мобильных
//         scrollTrigger: {
//             trigger: '.possibilities-section',
//             start: "top+=500 top",
//             end: "top+=600 top",
//             scrub: true,
//         }
//     }
// );











gsap.to('.possibilities-section', {
    scrollTrigger: {
        trigger: '.possibilities-section',
        start: "top 4%",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
    }

})