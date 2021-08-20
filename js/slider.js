var slideIndex = 0;

showSlides();
setInterval(showSlides, 3000);

function showSlides() {
    var slides = document.getElementsByClassName("slide");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}

