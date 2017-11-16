window.onload = function () {

  var slideIndex = 1;
  showDivs(slideIndex);

  function prevSlide() {
    showDivs(slideIndex += -1);
  }

  function nextSlide() {
    showDivs(slideIndex += 1);
  }

  document.getElementById("prev_img").addEventListener("click", prevSlide);
  document.getElementById("next_img").addEventListener("click", nextSlide);

  function showDivs(current) {

    if (screen.width <= 480) {
      var idx;
      var slideArray = document.getElementsByClassName("my_slides");

      if (current > slideArray.length) {
        slideIndex = 1
      }
      if (current < 1) {
        slideIndex = slideArray.length
      }
      for (idx = 0; idx < slideArray.length; idx++) {
        slideArray[idx].style.display = "none";
      }
      slideArray[slideIndex - 1].style.display = "block";
    }
  }

};