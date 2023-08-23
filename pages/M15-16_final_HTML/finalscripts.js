// JavaScript Document


/* these are from the bootstrap module 

$(document).ready(function(){
	$('.header').height($(window).height());
})

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

*/



/* ---------- Nav Bar Script ---------- */

// a function to move the smartphone-sized primary nav menu onscreen or offscreen
function navSlide() {
    
    const navBurger = document.querySelector('.finalPage__primaryNavburger');
        // creates a variable called "navBurger" set to the element that has the class "everyPage__primaryNavburger"
    
    const navList = document.querySelector('.finalPage__primaryNavList');
        // creates a variable called "navList" set to the element that has the class "everyPage__primaryNavList"
    
        navBurger.addEventListener('click',() => {
            // creates an event listener that's triggered when a user clicks the element from the "navBurger" variable above.

            //Toggle Nav Menu
            navList.classList.toggle('finalPage__primaryNavList--active');
                // upon clicking, a new class, "everyPage__primaryNavList--active" is toggled/added to the element defined in the above "navList" variable. this new class has a style rule that makes the menu move onscreen.
        

            //Animate Burger-lines
            navBurger.classList.toggle('burgerX');
                // upon clicking, a new class, "burgerX" is toggled/added to the element defined in the above "navBurger" variable. this new class has style rules that transform the horizontal lines of each div into diagonal x-shaped lines.
        });
}

navSlide(); //this calls the above function so it's ready for users to activate.




/* ---------- Scroll to Top Button script ---------- */


document.addEventListener("scroll", handleScroll);

// create a variable set to the element with class="finalPage__scrollButton"
var scrollButton = document.querySelector(".finalPage__scrollButton");

function handleScroll() {
    
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    var GOLDEN_RATIO = 0.3;

    if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
        
        //show button
        if(!scrollButton.classList.contains("finalPage__scrollButton--show"))
            scrollButton.classList.add("finalPage__scrollButton--show")
        
        } else {
            
        //hide button
        if(scrollButton.classList.contains("finalPage__scrollButton--show"))
            scrollButton.classList.remove("finalPage__scrollButton--show")
        }
}

scrollButton.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

