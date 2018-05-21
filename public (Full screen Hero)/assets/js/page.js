var slideIndex = 1;
showSlides(slideIndex);

function showClick(container) {
  $("#icon-image").hide();
  $(".contact-info").hide();
  $(".section-overlay").show();
  switch(container){
    case ".about-overlay":
      $(".about-overlay").show();
      $(".projects-overlay").hide();
      break;
    case ".projects-overlay":
      $(".projects-overlay").show();
      $(".about-overlay").hide();
      break;
  }
  animate(container, 'fadeIn');
}

function removeOverlays(){
  $(".section-overlay").hide();
  $(".contact-info").show();
  $("#icon-image").show();
}

function animate(element, animation){
    $(element).addClass('animated ' + animation);
    //wait for animation to finish before removing classes
    window.setTimeout( function(){
        $(element).removeClass('animated ' + animation);
    }, 2000);
}

// Slideshow JS
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
