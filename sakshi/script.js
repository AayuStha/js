var main = document.querySelector(".main");
var crsr = document.querySelector(".cursor");

crsr.style.height = "80px"
crsr.style.width = "80px"


main.addEventListener("mousemove", function(event){
    crsr.style.left = event.x + "px";
    crsr.style.top = event.y + "px";
})