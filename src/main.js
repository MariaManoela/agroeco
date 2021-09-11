const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', 
    },
    mousewheel: true,
    keyboard: true
});