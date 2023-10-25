//slideshow

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides((slideIndex += n));
    }
  
    function currentSlide(n) {
      showSlides((slideIndex = n));
    }
  
    function showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
  
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
  
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
    }
  
    function autoSlide() {
      plusSlides(1);
      setTimeout(autoSlide, 5000); 
    }
  
    autoSlide();
  
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    prevButton.addEventListener("click", () => plusSlides(-1));
    nextButton.addEventListener("click", () => plusSlides(1));
  
    const dotButtons = document.querySelectorAll(".dot");
  
    dotButtons.forEach((dot, index) => {
      dot.addEventListener("click", () => currentSlide(index + 1));
    });
  });
  
  
  