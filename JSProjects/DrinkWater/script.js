// DOM VARIABLES
// store in a node list as there is more than one (similar to an array)
const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

// first call on page load
updateBigCup()

// loop through the smallcups using a foreach loop
// access the value and the index
smallCups.forEach((cup, index) => {
  // place a click event on each cup and pass in the index
  // so it is know what cup is being clicked on
  cup.addEventListener('click', () => highlightCups(index))
})

function highlightCups(index) {
  // if the index of smallcups has class full and the smallcup after it does not contain full class then decrement index by one.  this will create a toggle effect when clicking on one of the small cups
  if (
    smallCups[index].classList.contains('full') &&
    !smallCups[index].nextElementSibling.classList.contains('full')
  ) {
    index--
  }
  // loop through the smallcups array
  smallCups.forEach((cup, index2) => {
    // check if the index of the cup in the loop iteration is
    // less than the cup selected, if so apply the full class
    if (index2 <= index) {
      cup.classList.add('full')
    }
    // else remove the full clas
    else {
      cup.classList.remove('full')
    }
  })

  // call when the loop finishes
  updateBigCup()
}

function updateBigCup() {
  // store the number of cups with full class
  // it has to the have the classes .cup-small.full
  // then store the length
  const fullCups = document.querySelectorAll('.cup-small.full').length

  // store the length of the nodelist of smallcups
  const totalCups = smallCups.length

  // if there are no fullcups then hide and set the height to 0
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    // increase/decrease the volume on the big cup depending on how many small cups are selected
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    // increase/decrease the percentage value depending on how many cups are selected
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'

    // // increase/decrease the liters value depending on how many cups are selected
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}
