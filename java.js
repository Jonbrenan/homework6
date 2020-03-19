


let body=document.body

let leftDiv=document.createElement('div')
let rightDiv=document.createElement('div')
let searchBar=document.createElement('input')
let searchButton=document.createElement('button')
let whereBttnsGo=document.createElement('div')
let cityName=document.createElement('h2')


leftDiv.setAttribute('id', 'leftDiv')
searchBar.setAttribute('id','searchBar')
searchButton.setAttribute('id', 'searchButton')
whereBttnsGo.setAttribute('id','whereBttnsGo')
searchButton.textContent="search"
rightDiv.setAttribute('id', 'rightDiv')
cityName.setAttribute('id', 'cityName')




///button stuff ////////////

let cities = []

function renderButtons (title) {
    let whereBttnsGo=document.getElementById('whereBttnsGo')

    whereBttnsGo.textContent=""

    cities.forEach(function (title) {
        let button = document.createElement('button')
        let breaak=document.createElement('br')
        button.classList.add('movie', 'btn', 'btn-outline-secondary')

        button.setAttribute('data-movie-title', title)
        button.textContent = title

        whereBttnsGo.appendChild(button)
        whereBttnsGo.appendChild(breaak)
        
    })
}


searchButton.addEventListener('click', function (event) {
    event.preventDefault()
let title = document.getElementById('searchBar').value.trim()

if (title !== '') {
    cities.push(title)
    renderButtons()
}

fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + title + '&appid=bffc95ec7016bf649c8ac8152b81006d')
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data)
   let cityBigName=document.getElementById('cityName')
   cityBigName.textContent=title
   
})


})
///////////////////////////


///weather information/////







body.appendChild(leftDiv)
body.appendChild(rightDiv)
leftDiv.appendChild(searchBar)
leftDiv.appendChild(searchButton)
leftDiv.appendChild(whereBttnsGo)
rightDiv.appendChild(cityName)








