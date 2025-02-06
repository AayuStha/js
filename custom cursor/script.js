var cursor = document.querySelector(".cursor")
var card = document.querySelector(".card")


card.addEventListener("mousemove", function(event){
    cursor.style.left= event.x + "px";
    cursor.style.top= event.y + "px";

})