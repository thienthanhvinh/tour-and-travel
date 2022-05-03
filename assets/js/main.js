
$(document).ready(function() {
    var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
    },
})
}); 