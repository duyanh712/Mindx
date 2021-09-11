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
document.getElementById("cont").onclick = function() {
  document.querySelector(".contact").style.display = "flex";
}
document.getElementsByClassName("close0")[0].onclick = function() {
  document.querySelector(".contact").style.display = "none";
}

var grid = document.getElementsByClassName("grid");
  grid[0].onclick = function() {
    document.getElementById("modal-content0").style.display = "flex";
  }
  grid[1].onclick = function() {
    document.getElementById("modal-content1").style.display = "flex";
  }
  grid[2].onclick = function() {
    document.getElementById("modal-content2").style.display = "flex";
  }
  grid[3].onclick = function() {
    document.getElementById("modal-content3").style.display = "flex";
  }
  grid[4].onclick = function() {
    document.getElementById("modal-content4").style.display = "flex";
  }
  grid[5].onclick = function() {
    document.getElementById("modal-content5").style.display = "flex";
  }
  grid[6].onclick = function() {
    document.getElementById("modal-content6").style.display = "flex";
  }
  grid[7].onclick = function() {
    document.getElementById("modal-content7").style.display = "flex";
  }

var close = document.getElementsByClassName("close");
  close[0].onclick = function() {
    document.getElementById("modal-content0").style.display = "none";
  };
  close[1].onclick = function() {
    document.getElementById("modal-content1").style.display = "none";
  }
  close[2].onclick = function() {
    document.getElementById("modal-content2").style.display = "none";
  }
  close[3].onclick = function() {
    document.getElementById("modal-content3").style.display = "none";
  }
  close[4].onclick = function() {
    document.getElementById("modal-content4").style.display = "none";
  }
  close[5].onclick = function() {
    document.getElementById("modal-content5").style.display = "none";
  }
  close[6].onclick = function() {
    document.getElementById("modal-content6").style.display = "none";
  }
  close[7].onclick = function() {
    document.getElementById("modal-content7").style.display = "none";
  }

 
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



