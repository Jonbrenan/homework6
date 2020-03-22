let currentTemp = document.createElement('h5')
let currentHumid = document.createElement('h5')
let currentWind=document.createElement('h5')
let currentUV = document.createElement('h5')
let uvButton = document.createElement('button')


let mainDiv = document.getElementById('mainDiv')



let cities = []

function renderButtons (title) {
    let list = document.getElementById('buttonList')

    list.textContent=""
    
    cities.forEach(function (title) {
        let li = document.createElement('li')
        li.setAttribute('class', 'list-group-item')
        let button= document.createElement('button')
        button.classList.add('movie', 'btn', 'btn-outline-secondary')

        button.setAttribute('data-movie-title', title)
        button.textContent = title

        list.appendChild(li)
        li.appendChild(button)
    })
}


let searchbutton= document.getElementById('searchButton')

searchbutton.addEventListener('click', function () {
    event.preventDefault()
    let title = document.getElementById('searchBar').value.trim()
    

if (title !== '') {
    cities.push(title)
    renderButtons()
}
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + title + '&appid=bffc95ec7016bf649c8ac8152b81006d')
.then(function (response) {
    return response.json()
})
.then(function (data) {
   
    let cityName=document.getElementById('cityName')
    let date = new Date();
    let weatherIcon=document.createElement('img')
    weatherIcon.setAttribute('class', 'bg')
    let tempC=data.main.temp - 273.15
    let tempF = tempC * (9 / 5) + 32
   

    currentTemp.textContent= 'Temperature: ' + tempF.toFixed(1) + '°F'
    currentHumid.textContent= 'Humidity: ' + data.main.humidity + '%'
    currentWind.textContent=data.wind.speed+ ' MPH'

 
    let year = (date.getFullYear());
    let month = (date.getMonth());
    let day = (date.getDay());
    let weatherCode= data.weather[0].icon
    let weatherCondition = 'http://openweathermap.org/img/wn/' + weatherCode + '@2x.png'
    weatherIcon.src=weatherCondition

    

    cityName.textContent=title + ' ' + '(' + year + '/' + month + '/' + day + ')' + ' '

    cityName.appendChild(weatherIcon)
    mainDiv.appendChild(currentTemp)
    mainDiv.appendChild(currentHumid)
    mainDiv.appendChild(currentWind)

    let lat= data.coord.lat
    let lon = data.coord.lon

    fetch('https://api.openweathermap.org/data/2.5/uvi?appid=bffc95ec7016bf649c8ac8152b81006d&lat=' + lat + '&lon=' + lon)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        
        
      currentUV.textContent="UV Index: "
      currentUV.setAttribute('class', 'floaty')
      uvButton.textContent= data.value

      if(uvButton.textContent === 0 || uvButton.textContent < 2) {
          uvButton.setAttribute('class', 'low')
      }else if (uvButton.textContent === 2 ||  uvButton.textContent < 7) {
          uvButton.setAttribute('class', 'mid')
      } if (uvButton.textContent > 8) {
          uvButton.setAttribute('class', 'high')
      }


        mainDiv.appendChild(currentUV)
        mainDiv.appendChild(uvButton)
    })

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ title + '&appid=bffc95ec7016bf649c8ac8152b81006d')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.list)

        /////// day2
        let day2date=document.getElementById('day2')
        day2date.textContent=data.list[4].dt_txt
        let pic1ID=data.list[4].weather[0].icon
        let iconLink1='http://openweathermap.org/img/wn/' + pic1ID + '@2x.png'
        let pic1Source= document.getElementById('day2Img')
        pic1Source.src=iconLink1

        let temp2=document.getElementById('temp2')
        let tempC2= data.list[4].main.temp - 273.15
        let tempF2= tempC2 * (9 / 5) + 32
        temp2.textContent='Temperature: ' + tempF2.toFixed(1)

        let humid2= document.getElementById('humid2')
        humid2.textContent= "Humidity: " + data.list[4].main.humidity

        ////////

        /////day 3

        let day3date=document.getElementById('day3')
        day3date.textContent=data.list[12].dt_txt
        let pic2ID=data.list[12].weather[0].icon
        let iconLink2='http://openweathermap.org/img/wn/' + pic2ID + '@2x.png'
        let pic2Source= document.getElementById('day3Img')
        pic2Source.src=iconLink2

        let temp3=document.getElementById('temp3')
        let tempC3= data.list[12].main.temp - 273.15
        let tempF3= tempC3 * (9 / 5) + 32
        temp3.textContent='Temperature: ' + tempF3.toFixed(1)

        let humid3= document.getElementById('humid3')
        humid3.textContent= "Humidity: " + data.list[12].main.humidity
        
        ///////
        //////day 4

        let day4date=document.getElementById('day4')
        day4date.textContent=data.list[20].dt_txt
        let pic3ID=data.list[20].weather[0].icon
        let iconLink3='http://openweathermap.org/img/wn/' + pic3ID + '@2x.png'
        let pic3Source= document.getElementById('day4Img')
        pic3Source.src=iconLink3

        let temp4=document.getElementById('temp4')
        let tempC4= data.list[20].main.temp - 273.15
        let tempF4= tempC4 * (9 / 5) + 32
        temp4.textContent='Temperature: ' + tempF4.toFixed(1)

        let humid4= document.getElementById('humid4')
        humid4.textContent= "Humidity: " + data.list[20].main.humidity



        ///////

        //////day5
        let day5date=document.getElementById('day5')
        day5date.textContent=data.list[28].dt_txt
        let pic4ID=data.list[28].weather[0].icon
        let iconLink4='http://openweathermap.org/img/wn/' + pic4ID + '@2x.png'
        let pic4Source= document.getElementById('day5Img')
        pic4Source.src=iconLink4

        let temp5=document.getElementById('temp5')
        let tempC5= data.list[28].main.temp - 273.15
        let tempF5= tempC5 * (9 / 5) + 32
        temp5.textContent='Temperature: ' + tempF5.toFixed(1)

        let humid5= document.getElementById('humid5')
        humid5.textContent= "Humidity: " + data.list[28].main.humidity

        ///////

        ////// day6

        let day6date=document.getElementById('day6')
        day6date.textContent=data.list[36].dt_txt
        let pic5ID=data.list[36].weather[0].icon
        let iconLink5='http://openweathermap.org/img/wn/' + pic5ID + '@2x.png'
        let pic5Source= document.getElementById('day6Img')
        pic5Source.src=iconLink5

        let temp6=document.getElementById('temp6')
        let tempC6= data.list[36].main.temp - 273.15
        let tempF6= tempC6 * (9 / 5) + 32
        temp6.textContent='Temperature: ' + tempF6.toFixed(1)

        let humid6= document.getElementById('humid6')
        humid6.textContent= "Humidity: " + data.list[36].main.humidity
    })
})


})
