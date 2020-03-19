


let body=document.body
let form=document.createElement('form')
let leftDiv=document.createElement('div')
let rightDiv=document.createElement('div')
let searchBar=document.createElement('input')
let searchButton=document.createElement('button')
let whereBttnsGo=document.createElement('div')
let cityName=document.createElement('h2')

form.setAttribute('class', 'container')
leftDiv.setAttribute('id', 'leftDiv')
searchBar.setAttribute('id','searchBar')
searchButton.setAttribute('id', 'searchButton')
whereBttnsGo.setAttribute('id','whereBttnsGo')
searchButton.textContent="search"
rightDiv.setAttribute('id', 'rightDiv')
rightDiv.setAttribute('class', 'container')
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
    console.log(data.list[0].wind.speed)
   let cityBigName=document.getElementById('cityName')
   let weatherIcon=document.createElement('img')
   let tempC=data.list[0].main.temp - 273.15
   let tempF = tempC * (9 / 5) + 32
   let currentTemp=document.createElement('h3')
   let currentHumid=document.createElement('h3')
   let currentWind=document.createElement('h3')
   
   
   let currentDate=data.list[0].dt_txt
   let weatherCode=data.list[0].weather[0].icon
   let weatherCondition = 'http://openweathermap.org/img/wn/' + weatherCode + '@2x.png'
   weatherIcon.setAttribute('src', weatherCondition)
   currentTemp.textContent= 'Temperature: ' + tempF.toFixed(1) + '°F'
   currentHumid.textContent=data.list[0].main.humidity + '%'
   currentWind.textContent=data.list[0].wind.speed+ ' MPH'




   cityBigName.textContent=title + " " + currentDate
   rightDiv.appendChild(currentTemp)
   rightDiv.appendChild(currentHumid)
   rightDiv.appendChild(currentWind)
   cityName.appendChild(weatherIcon)
   
})


})
///////////////////////////


///weather information/////






body.appendChild(form)
form.appendChild(cityName)

body.appendChild(rightDiv)

form.appendChild(searchBar)
form.appendChild(leftDiv)
leftDiv.appendChild(searchButton)
leftDiv.appendChild(whereBttnsGo)
rightDiv.appendChild(cityName)








