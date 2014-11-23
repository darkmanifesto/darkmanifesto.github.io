'use strict';


function randColor() {
    var red = Math.ceil(Math.random()*255),
        green = Math.ceil(Math.random()*255),
        blue = Math.ceil(Math.random()*255);

        return 'rgb(' + red + ',' + green + ',' + blue + ')';
}


$(document).ready(function() {
    $('div#colorshift').click(function(){
        $('div#colorshift').css('color', randColor());
    });



});
