
// Navbar
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbar = document.querySelector(".navbar");
  let originalBorderRadius;

  // Store the original border radius when the page loads
  originalBorderRadius = getComputedStyle(navbar).borderRadius;

  navbarToggler.addEventListener("click", function() {
      if (!navbar.classList.contains("collapsed")) {
          navbar.style.borderRadius = "16px";
      } else {
          navbar.style.borderRadius = originalBorderRadius; // Reset to original
      }
  });

  // Listen for collapse hidden event
  navbar.addEventListener("hidden.bs.collapse", function() {
      navbar.style.borderRadius = originalBorderRadius; // Reset to original
  });
});





// Slick Slider
$(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });
  
  function nextSection() {
    $('.slider').slick('slickNext');
  }
  
  function prevSection() {
    $('.slider').slick('slickPrev');
  }





// Bg Hover Script
function hoverEffect(buttonNumber) {
    var pedroRegions = document.getElementById("pedro-regions");
    pedroRegions.classList.remove("hovered-1", "hovered-2", "hovered-3", "hovered-4", "hovered-5", "hovered-6", "hovered-7", "hovered-8", "hovered-9", "hovered-10");
  
    if (buttonNumber !== 0) {
      pedroRegions.classList.add("hovered-" + buttonNumber);
    }
}
// Bg Hover Script
  




// Swiper Slider
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});










  