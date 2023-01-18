// Dom Variables
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// when clicked apply the active class and focus on the input using the focus method
btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})
