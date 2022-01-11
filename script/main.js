AOS.init();
//For Smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 800,
});
// Navbar
var navbarSec = document.getElementById("navbar-sec");
var hamburgerButton = document.getElementById("hamburger-icon");
hamburgerButton.onclick = function(){
    navbarSec.classList.toggle("navbar-active");
};
// Links customization
var learnMore = document.querySelectorAll("a.learn-more-button, #social-media-links a");
for (var i = 0; i< learnMore.length; i++){
    learnMore[i].addEventListener("click", function(e){
        e.preventDefault();
    });
}
 
