// Dom variables
// Use queryselctorAll as there is more than one button and store in a nodelist which is like an array
const toggles = document.querySelectorAll('.faq-toggle')

// use a forEach to loop through each button
toggles.forEach((toggle) => {
  // event listener
  toggle.addEventListener('click', () => {
    // on click access the parent node of toggle which is faq div and apply the active class to it
    toggle.parentNode.classList.toggle('active')
  })
})
