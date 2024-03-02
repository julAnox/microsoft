document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    let slideInterval;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    const prevButton = document.getElementById("left_button");
    const nextButton = document.getElementById("right_button");
    const pauseButton = document.getElementById("pause");
    const playButton = document.getElementById("play_circle");

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
        const offset = -currentSlide * 50;
        document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
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