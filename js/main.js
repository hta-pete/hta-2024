const $window = window
const header  = document.querySelector("header")
const div     = document.querySelector('.hero')
const cards   = div.querySelectorAll('.carousel-list')
const menu    = document.querySelector('.mobile-menu')
const menuBtn = document.querySelector('.mobile-menu-btn')

// —————————––––––––––––––––––
// Scroll Stuff
// —————————––––––––––––––––––
let scrollPos = window.scrollY

function scrollStuff(){
  let newScrollPos = window.scrollY

  if( newScrollPos > header.offsetHeight/2 )
    header.classList.add("active")
  else
    header.classList.remove("active")
  
  scrollPos = newScrollPos

  cards[0].style.transform = "translateX("+ -(Math.round(scrollPos))*0.2 +"px" 
  cards[1].style.transform = "translateX("+ (Math.round(scrollPos))*0.2 +"px" 

  console.log(Math.round(scrollPos))
 
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

menuBtn.onclick = () => {
  menuBtn.classList.toggle('active')
  menu.classList.toggle('open')
  document.body.classList.toggle('no-scroll')
}

