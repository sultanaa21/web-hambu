// Animations
gsap.registerPlugin(ScrollTrigger)

// Hero Animations
const tl = gsap.timeline()

tl.to(".logo", {
  duration: 1,
  opacity: 1,
  ease: "power2.out"
})
.from("#hero-title", {
  duration: 1.5,
  y: 100,
  opacity: 0,
  ease: "power4.out"
})
.from("#hero-desc", {
  duration: 1,
  y: 30,
  opacity: 0,
  ease: "power3.out"
}, "-=1")
.from(".btn-minimal", {
  duration: 1,
  y: 20,
  opacity: 0,
  ease: "power3.out"
}, "-=0.8")
.from(".product-hero-container", {
  duration: 2,
  x: 100,
  opacity: 0,
  ease: "power4.out"
}, "-=1.5")

// Subtle Floating for main product
gsap.to(".main-product", {
  y: 20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
})

// Parallax for cheese drip
gsap.to(".cheese-drip-top", {
  y: 50,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
})

// Reveal elements on scroll
const revealElements = document.querySelectorAll(".reveal")
revealElements.forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      toggleActions: "play none none none"
    },
    duration: 1.5,
    y: 0,
    opacity: 1,
    ease: "power4.out"
  })
})

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// Header scroll effect
const header = document.querySelector('header')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})


