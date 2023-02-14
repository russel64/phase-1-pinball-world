let nav = document.querySelector('.game-list')

let image = document.querySelector('#detail-image')
let title = document.querySelector('#detail-title')
let score = document.querySelector('#detail-high-score')
let currentGame;

fetch('http://localhost:3000/games')
.then(res => res.json() )
.then(data => {
    data.forEach(games => renderGames(games)) 
    renderDetails(data[0])
    console.log(data) })


function renderGames(games){
    let names = document.createElement('h5')
    names.textContent = `${games.name} (${games.manufacturer_name})`  
    names.addEventListener('click', () => renderDetails(games))
    nav.append(names)
    
}


function renderDetails(games){
    image.src = games.image
    title.textContent = games.name
    score.textContent = games.high_score
    currentGame = games
}




let form = document.querySelector('#high-score-form')
let scoreInput = document.querySelector('#score-input')

form.addEventListener('submit', e => {
    e.preventDefault()
   
    score.textContent = scoreInput.value
    currentGame.high_score = scoreInput.value
    e.target.reset()
})
