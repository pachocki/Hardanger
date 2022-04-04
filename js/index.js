// Variable declarations
const openMenuIcon = document.getElementById('menu-toggle-open');
const closeMenuIcon = document.getElementById('menu-toggle-close');
const mobileMenu = document.getElementById('mobile-menu');
const headerOverlay = document.getElementById('header');
const manImage = document.getElementById('man');
const skyImage = document.getElementById('sky');
const mountainsImage = document.getElementById('mountains');
const heroData = document.getElementById('hero-data');

// Open menu & add overlay
openMenuIcon.addEventListener('click', ()=>{
    mobileMenu.classList.add("menu-opened");
})

// Close menu & remove overlay
closeMenuIcon.addEventListener('click', ()=>{
    mobileMenu.classList.remove("menu-opened");
})

//Parallax Effect

window.addEventListener("scroll" , ()=>{
    let scrollPosition = window.scrollY;
    manImage.style.transform="translateY(" + -scrollPosition * 0.07 + "%)";
    mountainsImage.style.transform="translateY(" + -scrollPosition * 0.04 + "%)";
    skyImage.style.transform="translateY(" + -scrollPosition * 0.01 + "%)";
    heroData.style.transform="translateY(" + -scrollPosition * 0.03 + "%)";
    heroData.style.opacity= 1 - scrollPosition * 0.003;

})


var image = document.getElementsByClassName('ione');
new simpleParallax(image, {
      scale: 1.6,
      orientation: 'left'
});
var image = document.getElementsByClassName('itwo');
new simpleParallax(image, {
      scale: 2
});

var image = document.getElementsByClassName('ithree');
new simpleParallax(image, {
      scale: 1.9,
      orientation: 'right'
});
var image = document.getElementsByClassName('ifour');
    new simpleParallax(image, {
          scale: 2.1,
          orientation: 'right'
    });





