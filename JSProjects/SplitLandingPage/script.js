// DOM VARIABLES
const left = document.querySelector('.left')
const right = document.querySelector('.right')

// add either the left or right class to the container class
const container = document.querySelector('.container')

let hoverLeft = 'hover-left'
let hoverRight = 'hover-right'

// When mouse hovers over add either the right or left class to the container class
left.addEventListener('mouseenter', () => container.classList.add(hoverLeft))
left.addEventListener('mouseleave', () => container.classList.remove(hoverLeft))

right.addEventListener('mouseenter', () => container.classList.add(hoverRight))
right.addEventListener('mouseleave', () =>
  container.classList.remove(hoverRight)
)
