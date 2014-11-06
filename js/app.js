// Init foundation
$(document).foundation();

// Calculate width of google map
window.onload = function() {
    $("#map_content").css("width", $(window).width());
    // $('#collection-home  .hover').fadeIn();
};
$( window ).resize(function() {
    $("#map_content").css("width", $(window).width());
});
