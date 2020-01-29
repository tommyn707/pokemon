$( document ).ready(function() {
    console.log( "ready!" );
});       

$(document).ready(function() {
    for (var i = 1; i <= 151; i++) {
        $('#pokemon').append("<img src='http:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png'/>");
    }

});