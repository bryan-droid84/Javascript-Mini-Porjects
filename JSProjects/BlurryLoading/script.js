// DOM VARIABLES
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// initial value
let load = 0

// use setinterval to run the blurring function in an interval of 30ms
let int = setInterval(blurring, 30)

function blurring() {
  // incremenet load by one
  load++

  // if load reaches 100 then use clearInterval function to stop setInterval function that is stored in int variable
  if (load > 99) {
    clearInterval(int)
  }

  // Replace innerText of loadText with load variable using template string
  // It should increase by incrememnt of 1 from 0-100
  loadText.innerText = `'${load}%'`

  // start fully apaque so go from 1 to 0 on the opaque scale
  // call scale function and pass in the load variable pass in the values 0 - 100 and then map opacity with 1 - 0 because it will fade out opacity of the number as it increases
  loadText.style.opacity = scale(load, 0, 100, 1, 0)

  // use the scale method on the image but this time set the blue to be at 30px and as the load increases the blue effect diminishes
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
//function to Map a range of numbers to another range of numbers to acquired from stackoverflow
const scale = (num, in_min, in_max, out_min, out_max) =>
  ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
