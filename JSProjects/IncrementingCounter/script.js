// dom variables
// store in a node list (similar to an array)
const counters = document.querySelectorAll('.counter')

// loop through the counters using higher order foreach function
counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCounter = () => {
    // convert data-target and counter.innerText to a number using +
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    // divide the target value by 200
    const increment = target / 200

    // check if c is less than the target so it does not go passed it
    if (c < target) {
      //Use Math.ceil to round up the value
      counter.innerText = `${Math.ceil(c + increment)}`
      // call updatecounter every one millisecond to create the rounding up effect
      setTimeout(updateCounter, 3)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})
