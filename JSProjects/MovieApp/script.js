// DOM VARIABLES
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

//API VARIABLES
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=174a84c4eca9f0aba83cba7ff610db1c&page=1`

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=174a84c4eca9f0aba83cba7ff610db1c&query="'

// GET INITIAL MOVIES
getMovies(API_URL)

async function getMovies(url) {
  // returns a promise and stored in a variable
  const res = await fetch(url)

  // returns the data and stored in a variable in json format
  const data = await res.json()

  console.log(data.results)

  showMovies(data.results)
}

function showMovies(movies) {
  // clear the screen of the preloaded searches
  main.innerHTML = ''

  movies.forEach((movie) => {
    // destructure values from object and store them into variables
    const { title, poster_path, vote_average, overview } = movie

    // create a movie element
    const movieEL = document.createElement('div')
    movieEL.classList.add('movie')

    movieEL.innerHTML = `
    
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
      />
      <div class="movie-info">
        <h3>Movie Title</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
        Provident?
      </div>`

    main.appendChild(movieEL)
  })
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
  // stop it from automatically submitting
  e.preventDefault()

  // search is an input so get the value and store in a variable
  const searchTerm = search.value

  // check searchTerm exists and is not equal to an emptry string
  if (searchTerm && searchTerm !== '') {
    // concatenate the searchterm on the searchapi
    getMovies(SEARCH_API + searchTerm)

    // clear the search input
    search.value = ''
  } else {
    // if nothing input reload the page
    window.location.reload
  }
})
