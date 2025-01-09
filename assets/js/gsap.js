


gsap.registerPlugin(ScrollTrigger);

// Для каждой карточки добавляем анимацию
gsap.utils.toArray('.possibilities-animate').forEach((item, index) => {
    gsap.fromTo(item,
        {
            y: 0, // Начальная позиция карточки
        },
        {
            y: -350 * index, // Каждая карточка будет двигаться вверх по мере прокрутки
            scrollTrigger: {
                trigger: '.possibilities-section', // Общий триггер для всех карточек
                start: () => `top ${20 - index * 10}%`, // Каждая карточка начинает позже предыдущей
                end: () => `+=${350}`, // Каждая карточка анимируется на 350px
                scrub: true, // Плавная анимация
                toggleActions: "play reverse play reverse", // Анимация запускается в обе стороны
            }
        }
    );
});

// Закрепление секции с корректным завершением
gsap.to('.possibilities-section', {
    scrollTrigger: {
        trigger: '.possibilities-section',
        start: "top 10%", // Секция закрепляется чуть раньше
        end: () => `+=${350 * (document.querySelectorAll('.possibilities-animate').length - 1)}`, // Конец синхронизирован с последней карточкой
        scrub: true, // Плавная прокрутка
        pin: true, // Закрепляем секцию
        pinSpacing: false, // Убираем лишнее пространство после завершения
    }
});
