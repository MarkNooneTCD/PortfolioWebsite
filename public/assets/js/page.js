function showClick(container) {
  $("#icon-image").hide();
  $(".section-overlay").show();
  switch(container){
    case ".about-overlay":
      $(".about-overlay").show();
      $(".projects-overlay").hide();
      $(".contact-overlay").hide();
      break;
    case ".projects-overlay":
      $(".projects-overlay").show();
      $(".about-overlay").hide();
      $(".contact-overlay").hide();
      break;
    case ".contact-overlay":
      $(".contact-overlay").show();
      $(".projects-overlay").hide();
      $(".about-overlay").hide();
      break;
  }
  animate(container, 'fadeIn');
}

function removeOverlays(){
  $(".section-overlay").hide();
  $("#icon-image").show();
}

function animate(element, animation){
    $(element).addClass('animated ' + animation);
    //wait for animation to finish before removing classes
    window.setTimeout( function(){
        element.removeClass('animated ' + animation);
    }, 2000);
}
