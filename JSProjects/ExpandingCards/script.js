// Store panel class into a nodelist
const panels = document.querySelectorAll('.panel')

// Loop through each panel in panels nodelist
panels.forEach((panel) => {
  // Listen for a click
  panel.addEventListener('click', () => {
    // remove active class from all divs
    removeActiveClasses()
    // add on active class if clicked on
    panel.classList.add('active')
  })
})

// remove the active class from div
const removeActiveClasses = () =>
  panels.forEach((panel) => panel.classList.remove('active'))
