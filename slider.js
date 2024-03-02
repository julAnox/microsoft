document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".low-slider > .low-slide");
    let currentSlide = 0;
    let slideInterval;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    const prevButton = document.getElementById("left_button2");
    const nextButton = document.getElementById("right_button2");
    const pauseButton = document.getElementById("pause2");
    const playButton = document.getElementById("play_circle2");

    prevButton.addEventListener("click", () => {
        showSlide(currentSlide - 1);
        updateSlider();
        clearInterval(slideInterval);
    });
    nextButton.addEventListener("click", () => {
        showSlide(currentSlide + 1);
        updateSlider();
        clearInterval(slideInterval);
    });

    function updateSlider() {
        const offset = -currentSlide * 100; 
        document.querySelector('.low-slider').style.transform = `translateX(${offset}%)`;
    }

    function startSlider() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
            updateSlider();
        }, 4000);
    }

    function pauseSlider() {
        clearInterval(slideInterval);
    }

    startSlider();

    pauseButton.addEventListener('click', pauseSlider);
    playButton.addEventListener('click', startSlider);
});