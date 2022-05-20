//Oefening angry-birds
// . is voor class, hashtag is voor id en niks is voor html tag.
const bird = document.querySelector(".bird");
// de image opgehaald uit html
let pixels = 0;
bird.addEventListener("click", function(){
    pixels = pixels + 50;
    bird.style.left = pixels + "px";

});

