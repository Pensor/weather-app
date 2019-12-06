const appKey = 'cf41b2a1fc10e017e8e1cde1a636cdad';

const searchInput = document.querySelector('#search-txt');
const searchButton = document.querySelector('#search-btn');
const cityName = document.querySelector('#city-name');
const icon = document.querySelector('#icon');
const temperature = document.querySelector('#temp');
const temperatureMax = document.querySelector('#temp-max');
const temperatureMin = document.querySelector('#temp-min');
const humidity = document.querySelector('#humidity-div');

const findWeatherDetails =() => {
    if (searchInput.value === "") {
    
    }else {
      let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&units=metric&appid="+appKey;
     httpRequestAsync(searchLink);
    }
}

const httpRequestAsync = async (url) => {
  await fetch(url).then(response => response.json())
  .then(jsonObject => {
    console.log(jsonObject);
    cityName.innerHTML = jsonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(jsonObject.main.temp) + "°";
    temperatureMax.innerHTML = parseInt(jsonObject.main.temp_max);
    temperatureMin.innerHTML = parseInt(jsonObject.main.temp_min);
    humidity.innerHTML = jsonObject.main.humidity + "%";
  })
  .catch(error => console.log(error))
};

const enterPressed = event => {
  if(event.key === 'Enter') {
    findWeatherDetails();
  }
}

searchInput.addEventListener('keyup', enterPressed);
searchButton.addEventListener('click', findWeatherDetails);