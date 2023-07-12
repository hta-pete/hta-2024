gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

const $window = window
const header  = document.querySelector("header")
const div     = document.querySelector('.hero')
const cards   = div.querySelectorAll('.carousel-list')
const menu    = document.querySelector('.mobile-menu')
const menuBtn = document.querySelector('.mobile-menu-btn')


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


/*--------------------
Hero Image Gallery
--------------------*/
let slideGap      = 10
let slideWidth    = document.querySelector('.hero__gallery-slides-item').offsetWidth
let slides        = gsap.utils.toArray('.hero__gallery-slides-item')
let slidesReverse = gsap.utils.toArray('.hero__gallery-slides-item--reverse')

/* set slides */
gsap.set([slides, slidesReverse], {
  //paddingRight: 10,
})

/* animate slides */
gsap.to(slides, {
  xPercent: window.innerWidth < 744 ?  -60 * (slides.length - 1) : -25 * (slides.length - 1),
  scrollTrigger: {
    ease: 'none',
    scrub: true
  }
})
gsap.to(slidesReverse, {
  xPercent: window.innerWidth < 744 ?  60 * (slidesReverse.length - 1) : 25 * (slidesReverse.length - 1),
  scrollTrigger: {
    ease: 'none',
    scrub: true
  }
})

