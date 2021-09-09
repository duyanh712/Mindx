//Scrolling active
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("scrolling-active", window.scrollY > 0);
})

//Drop down menu 
let dropMenu = document.getElementById("myDropdown")
let triggerMenu = document.getElementsByClassName("btn-book")[0];
triggerMenu.onclick = function () {
  dropMenu.style.display = "block";
}

window.addEventListener("mouseup", function(event) {
  if(event.target != dropMenu) {
    dropMenu.style.display = "none";
  }
})

// Modal Contact
document.getElementById("cont").addEventListener("click",function() {
  document.querySelector(".contact").style.display = "flex";
})
document.querySelector(".close").addEventListener("click",function() {
  document.querySelector(".contact").style.display = "none";
})
