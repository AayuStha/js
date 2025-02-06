var addFrnd = document.querySelector("button");
var remove = document.querySelector("#remove");

var text = document.querySelector("h5");

addFrnd.addEventListener("click", function(){
    text.innerHTML = "Friends";
    text.style.color = "green";
})

remove.addEventListener("click", ()=>{
    text.innerHTML = "Stranger";
    text.style.color = "red";
})