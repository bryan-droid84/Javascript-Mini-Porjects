// DOM VARIABLES

// node list of labels
const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  // take the text currently in the label
  // split the letters into an array using split method
  // use map on the array of letters to create transition delay by converting each letter into a span
  // use Join method to return the array of spans into a string
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, index) =>
        // index * 50 will increment each letter in the span moving upwards to create a transition delay with each letter moving upwards
        // example 50, 100, 150, 200ms etc
        // this creates the wave effect
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join('')
})
