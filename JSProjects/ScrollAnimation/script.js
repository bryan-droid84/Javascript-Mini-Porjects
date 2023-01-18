// DOM VARIABLES

// use querySelectorAll as there is more than box class and it will store it in a nodelist which is similar to an array
const boxes = document.querySelectorAll('.box')

// listen for a scroll window and then call checkboxes
window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
  // trigger point variable
  const triggerBottom = (window.innerHeight / 5) * 4

  // loop through each box in the nodelist using higher order function for each
  boxes.forEach((box) => {
    // store the value of where the top of a box is (y value from getBoundingClientRect)
    const boxTop = box.getBoundingClientRect().top

    // if boxtop value is less than triggerbottom value then add show class
    if (boxTop < triggerBottom) {
      box.classList.add('show')
      //Else remove the show class
    } else {
      box.classList.remove('show')
    }
  })
}
