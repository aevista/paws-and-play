
var onresize = function() {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var elmt = document.getElementById("backgroundimage");
    var content_body_title = document.getElementById("content-body-title");

    elmt.style.left = (width * 0.15).toString();
    
    if (width <= 1340) { elmt.style.left = "0"; }
};

$(document).ready(function() {
    $(".fancybox-thumb").fancybox();
    $( window ).resize(onresize());
});
