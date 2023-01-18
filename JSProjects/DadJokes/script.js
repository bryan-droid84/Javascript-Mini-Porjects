// Store the div with id of joke in jokeEl variable
const jokeEl = document.getElementById('joke')
// Store the button with jokeBtn of joke in jokebtn variable
const jokebtn = document.getElementById('jokeBtn')

// when clicking button call generateJoke
jokebtn.addEventListener('click', generateJoke)

// call function page load
generateJoke()

// use async in front of function when using await with fetch
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  //built in fetch request
  // use await because you have to wait for fetch to complete
  //store request in a variable
  const res = await fetch('https://icanhazdadjoke.com', config)

  // returns a promise so use await
  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

// using fetch request with .then
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   //built in fetch request
//   // second paramater is to return data as a json object
//   fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
