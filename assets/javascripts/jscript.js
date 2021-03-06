
var onresize = function() {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var background = document.getElementById("backgroundimage"); 
    
    background.style.left = (width * 0.01).toString() +"%";
    if (width <= 1340) background.style.left = "0";
};

$(document).ready(function() {
    $(".magnific").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true 
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $( window ).resize(onresize());
});
