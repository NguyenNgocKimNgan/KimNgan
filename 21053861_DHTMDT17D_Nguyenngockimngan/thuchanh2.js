// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // Tự động tính số slide hiển thị
    spaceBetween: 30,
    centeredSlides: true,
    loop: true, // Loop the slides
    autoplay: {
        delay: 2000, // Auto play delay
        disableOnInteraction: false, // Enable navigation after user interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
