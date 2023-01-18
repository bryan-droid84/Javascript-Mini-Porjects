// DOM VARIABLES
const body = document.body
// stored in a node list (similar to an array)
const slides = document.querySelectorAll('.slide')

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// initial variable for setting which slide will be accessed
let activeSlide = 0

function setBgToBody() {
  // set the background image on slides to the value in active slide
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setSlideImage() {
  // apply the active class to the selected slide
  slides[activeSlide].classList.add('active')
}

function setActiveSlide() {
  // loop through slides and remove active class
  slides.forEach((slide) => slide.classList.remove('active'))

  // add the active class back to selected slide
  slides[activeSlide].classList.add('active')
}

rightBtn.addEventListener('click', () => {
  // increment active slide
  activeSlide++

  // if the activeslide value is greater than the length of the slides nodelist, reset active slide back to 0
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  // increment active slide

  activeSlide--
  console.log(activeSlide)

  // if the activeslide value is greater than the length of the slides nodelist, reset active slide back to 0
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

// Call function set the first image
setBgToBody()
setSlideImage()
