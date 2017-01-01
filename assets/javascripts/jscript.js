
var onresize = function() {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var elmt = document.getElementById("backgroundimage");
    var content_body_title = document.getElementById("content-body-title");

    elmt.style.left = (width * 0.15).toString();
    
    if (width <= 1340) { elmt.style.left = "0"; }
    width <= 768 ? content_body_title.style.paddingTop = "0px" : content_body_title.style.paddingTop = "20px";
        
    
    /*else if (width <= 720) { elmt.style.left =  "100";}
    else if (width <= 960) { elmt.style.left = "150px";}
    else if (width <=1140){ elmt.style.left = "200px"; }
    else elmtn.style.left = "400px";
    */
};

$(document).ready(function() {
    $(".fancybox-thumb").fancybox();
    $( window ).resize(onresize());
});
