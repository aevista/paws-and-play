
window.onresize = function() {
    console.log("here");
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var elmt = document.getElementById("backgroundimage");


    elmt.style.left = (width * 0.15).toString();
    
    if (width <= 1340) { elmt.style.left = "0"; }
    if (width <= 768) { 
        var div = document.getElementById("content-body-title");
        div.style.paddingTop = "0px";
    }
    else {
        div.style.paddingTop = "25px";
    }
    /*else if (width <= 720) { elmt.style.left =  "100";}
    else if (width <= 960) { elmt.style.left = "150px";}
    else if (width <=1140){ elmt.style.left = "200px"; }
    else elmtn.style.left = "400px";
    */
};

window.onresize();

