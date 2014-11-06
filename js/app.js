// Init foundation
$(document).foundation();

// Calculate width of google map
window.onload = function() {
    $("#map_content").css("width", $(window).width());
    $("#map_content").css("height", $(".over_map").height()+150);
    // $('#collection-home  .hover').fadeIn();
};
$( window ).resize(function() {
    $("#map_content").css("width", $(window).width());
    $("#map_content").css("height", $(".over_map").height()+150);
});

// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
