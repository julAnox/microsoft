document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".low-slider > .low-slide");
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    const prevButton = document.querySelector(".low-slider-container .chevron_left");
    const nextButton = document.querySelector(".low-slider-container .chevron_right");

    prevButton.addEventListener("click", () => {
        showSlide(currentSlide - 1);
        updateSlider();
    });
    nextButton.addEventListener("click", () => {
        showSlide(currentSlide + 1);
        updateSlider();
    });

    function updateSlider() {
        const offset = -currentSlide * 100; 
        document.querySelector('.low-slider').style.transform = `translateX(${offset}%)`;
    }
});