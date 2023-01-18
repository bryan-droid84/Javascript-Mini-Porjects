// array of sound effect strings
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// loop for through the array
sounds.forEach((sound) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  // Innertext of the button will be taken from the array of sounds
  btn.innerText = sound

  // Listen for a click, run function to select audio
  btn.addEventListener('click', () => {
    // call function to stop sounds overlapping
    stopSongs()

    document.getElementById(sound).play()
  })

  // add each button with a class of btn inside the buttons div
  document.getElementById('buttons').appendChild(btn)
})

// function to stop sounds
function stopSongs() {
  // loop through sounds array
  sounds.forEach((sound) => {
    // store the audio tag in song
    const song = document.getElementById(sound)

    // pause sound
    song.pause()
    // reset sound back to 0
    song.currentTime = 0
  })
}
