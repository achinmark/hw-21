function moveRight(){
    $("#swim").animate({left: "+=1050"}, 2000,moveLeft)
}

function moveLeft(){
    $("#swim").animate({left: "-=1050"}, 2000,moveRight)
}

$(document).ready(function() {

   moveRight();

});
