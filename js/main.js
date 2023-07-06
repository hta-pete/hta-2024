const $window        = window
const header         = document.querySelector("header")
const div            = document.querySelector('.hero');
const cards          = div.querySelectorAll('.carousel-list');

// —————————––––––––––––––––––
// Scroll Stuff
// —————————––––––––––––––––––
let scrollPos = window.scrollY;

function scrollStuff(){
  let newScrollPos = window.scrollY
  let $time     = cards.length;
  let i         = 0; 

  if( newScrollPos > header.offsetHeight/2 )
    header.classList.add("active")
  else
    header.classList.remove("active")
  
  scrollPos = newScrollPos;
  
  cards[0].style.transform = "translateX("+ -(scrollPos)*0.2 +"px"; 
  cards[1].style.transform = "translateX("+ (scrollPos)*0.2 +"px"; 
  //cards[2].style.transform = "translate("+ -(scrollPos)*0.12 +"px"; 
}
window.onscroll = (_.throttle(scrollStuff, 200))

// —————————––––––––––––––––––
// Scroll Animations
// —————————––––––––––––––––––
const scrollAnimations = document.querySelectorAll('[data-scroll]');
const scrollObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) 
      entry.target.classList.add('is-inview')
    })
  },
  { threshold: 0.15 }
)
scrollAnimations.forEach(function(section){
  scrollObserver.observe(section)
})

