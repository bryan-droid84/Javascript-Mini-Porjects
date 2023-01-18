// DOM Variables
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// on click apply the show-nav class to the container
open.addEventListener('click', () => container.classList.add('show-nav'))

// on click remove the show-nav class to the container
close.addEventListener('click', () => container.classList.remove('show-nav'))
