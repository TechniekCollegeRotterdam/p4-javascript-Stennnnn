//Oefening angry-birds
// . is voor class, hashtag is voor id en niks is voor html tag.

let bird = document.querySelector(".bird")
let px = 0;
window.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key == "ArrowRight") {
        px = px + 50;
        bird.style.left = px + "px";
    }
})
window.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key == "ArrowLeft") {
        px = px - 50;
        bird.style.left = px + "px";
    }
})
window.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key == "ArrowUp") {
        px = px + 50;
        bird.style.bottom = px + "px";
    }
})
window.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key == "ArrowDown") {
        px = px - 50;
        bird.style.bottom = px + "px";
    }
})