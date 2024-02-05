// Pagination JS Start
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const paginationNumbers = document.querySelectorAll(".pagination-numbers span");
    const pedroFeaturedSection = document.getElementById("pedro-featured"); // Get the parent section
  
    let currentIndex = 0;
  
    function showSlide(index, scrollToTop = true) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
      });
      updatePagination(index);
  
      // Scroll to the top of the parent section only if triggered by user interaction
      if (scrollToTop) {
        pedroFeaturedSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    function updatePagination(index) {
      paginationNumbers.forEach((num, i) => {
        num.classList.remove("active");
        if (i === index) {
          num.classList.add("active");
        }
      });
    }
  
    prevBtn.addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  
    nextBtn.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  
    paginationNumbers.forEach((num, i) => {
      num.addEventListener("click", function() {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });
  
    showSlide(currentIndex, false); // Initially, don't scroll to the top
  });
  
  
  