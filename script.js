// JavaScript to toggle the navbar links visibility
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.navbar-links').classList.toggle('show');
});

//Javascript for text
var typed =  new Typed (".autoplay" , {
   strings : ["Capture the Moments" , "Freeze the Memories" , "Hold the Moments"] ,
   typeSpeed : 100 ,
   backSpeed : 50, 
   loop : true
} )
//Javascript for Sliders
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 6 seconds
}