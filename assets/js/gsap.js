


// gsap.registerPlugin(ScrollTrigger);
//
// // Для каждой карточки добавляем анимацию
// gsap.utils.toArray('.possibilities-animate').forEach((item, index) => {
//     gsap.fromTo(item,
//         {
//             y: 0, // Начальная позиция карточки
//         },
//         {
//             y: -350 * index, // Каждая карточка сдвигается точно на свою высоту
//             scrollTrigger: {
//                 trigger: '.possibilities-section', // Общий триггер для всех карточек
//                 start: () => `top ${20 - index * 20}%`, // Каждая карточка начинает позже предыдущей
//                 end: () => `+=${350}`, // Каждая карточка анимируется на 350px
//                 scrub: true, // Плавная анимация
//                 toggleActions: "play reverse play reverse", // Анимация запускается в обе стороны
//             }
//         }
//     );
// });


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

gsap.fromTo('.possibilities-item--two',
    { y: 0 },
    {
        y: isTablet ? -443 : -370,
        scrollTrigger: {
            trigger: '.possibilities-section',
            start: "top+=100 top",
            end: "top+=200 top",
            scrub: true,
        }
    }
);

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

gsap.fromTo('.possibilities-item--for',
    { y: 0 },
    {
        y: isTablet ? -1248 : -1115 ? isMobile : 1500,
        y: isTablet ? -1248 : -1115 ? isMobile : 1500,

        scrollTrigger: {
            trigger: '.possibilities-section',
            start: "top+=300 top",
            end: "top+=400 top",
            scrub: true,
        }
    }
);

gsap.fromTo('.possibilities-item--five',
    { y: 0 },
    {
        y: isTablet ? -1650 : -1480,
        scrollTrigger: {
            trigger: '.possibilities-section',
            start: "top+=400 top",
            end: "top+=500 top",
            scrub: true,
        }
    }
);

gsap.fromTo('.possibilities-item--six',
    { y: 0 },
    {
        y: isTablet ? -2054 : -1850, // Увеличиваем на 200 для мобильных
        scrollTrigger: {
            trigger: '.possibilities-section',
            start: "top+=500 top",
            end: "top+=600 top",
            scrub: true,
        }
    }
);


gsap.to('.possibilities-section', {
    scrollTrigger: {
        trigger: '.possibilities-section',
        start: "top 4%",

        end: "bottom top", // Окончание — когда нижняя часть секции выходит за экран
        scrub: true,
        pin: true,
        pinSpacing: false,
    }
});
