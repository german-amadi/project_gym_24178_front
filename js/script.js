let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelector(".slides").children;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
}

setInterval(nextSlide, 4000);

function nextSlide() {
  showSlides();
}

function prevSlide() {
  slideIndex -= 2;
  if (slideIndex < 0) {
    slideIndex = document.querySelector(".slides").children.length - 1;
  }
  showSlides();
}