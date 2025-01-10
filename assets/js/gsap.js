


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
const isMobile = window.innerWidth < 700;

gsap.fromTo('.possibilities-item--one',
    { y: 0 },
    {
        y: isMobile ? -20 : 0,
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
        y: isMobile ? -440 : -350,
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
        y: isMobile ? -840 : -730,
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
        y: isMobile ? -1240 : -1100,
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
        y: isMobile ? -1640 : -1470,
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
        y: isMobile ? -2040 : -1850, // Увеличиваем на 200 для мобильных
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
        start: "top 10%",

        end: "bottom top", // Окончание — когда нижняя часть секции выходит за экран
        scrub: true,
        pin: true,
        pinSpacing: false,
    }
});
