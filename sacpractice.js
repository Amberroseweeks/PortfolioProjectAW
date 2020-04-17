//SLIDER
window.onscroll = function() {myFunction()};

var header = document.getElementById("navbaraw");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// END HEADER

//PORTFOLIO SLIDER

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 0}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  
}


//MODAL

setTimeout(function() {
  document.getElementById('welcome').style.display = 'block';
}, 5000)

var showSecondDiv = function() {
	document.getElementById('modal-content').style.display = 'block';
}

setTimeout(showSecondDiv, 5000)

// close

var modal = document.getElementById("welcome");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  welcome.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    welcome.style.display = "none";
  }
}

//thank you alert


function thankyoualert() {
  alert("Thank you for submiting your interest!");
} 