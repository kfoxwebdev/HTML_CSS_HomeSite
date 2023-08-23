


/* ---------- M8 Disclosure Widget script ---------- */

const details = document.querySelectorAll('details');

details.forEach(detail => {
    const detailContent = detail.querySelector('div');
    const detailClosedHeight = detail.scrollHeight;
    
  // open the details to get the height of the content
    detail.open = true;
    
  // pass it to the the element as CSS property
    detailContent.style.setProperty('--details-content-height-open', detailContent.scrollHeight + 'px');
    
    detail.style.setProperty('--details-height-open', detailContent.scrollHeight + detailClosedHeight + 'px');
    
  // close the details again
    detail.open = false;

    detailContent.style.setProperty('--details-content-height-closed', detailContent.scrollHeight + 'px');
    
    detail.style.setProperty('--details-height-closed', detailClosedHeight + 'px');

    detail.addEventListener('click', (ev) => {
        const container = ev.target.parentElement;
        // get time of transition from CSS property
        const timeout = getComputedStyle(container.querySelector('div')).getPropertyValue('--details-transition-time');

        // we can't use [open] as it will be only removed after the transition
        container.classList.toggle('is--open');

        // remove the open attribute once the transition is done, because otherwise we won't see the transition
        if (container.open) {
          ev.preventDefault();
          setTimeout(function() {
            container.open = false;
          }, parseInt(timeout))
        }
    })
    
});



/* ---------- M8 Scroll to Top Button script ---------- */


document.addEventListener("scroll", handleScroll);

// create a variable set to the element with class="m8page__scrollButton"
var scrollButton = document.querySelector(".m8page__scrollButton");

function handleScroll() {
    
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    var GOLDEN_RATIO = 0.5;

    if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
        
        //show button
        if(!scrollButton.classList.contains("m8page__scrollButton--show"))
            scrollButton.classList.add("m8page__scrollButton--show")
        
        } else {
            
        //hide button
        if(scrollButton.classList.contains("m8page__scrollButton--show"))
            scrollButton.classList.remove("m8page__scrollButton--show")
        }
}

scrollButton.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}






