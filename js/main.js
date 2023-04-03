let weatherLink = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;
let form = document.getElementById('weatherForm');
form.addEventListener('submit', weatherCard);

async function weatherCard(event){
    event.preventDefault();
    let cityName = event.target.cityName.value;
    console.log(cityName)
    let cityInfo = await getWeather(cityName);
    buildCityCard(cityInfo);
    event.target.cityName.value = '';

}

async function getWeather(cityName){
    try{
        let response = await fetch(weatherLink + cityName)
        let data = await response.json();
        return data;

    } catch(err){
        console.error(err);
    };



};

function buildCityCard(cityObj){
    let card = document.getElementsByClassName('card')[0];
    let old_elements = document.getElementsByClassName('card-text');
    let body = document.body;
    let conditionC = cityObj.location.name
    console.log(old_elements)
    if (old_elements.length > 0){
      let cardBody2 = document.getElementsByClassName('card-body'); 
      
      old_elements[0].remove()
      old_elements[0].remove()
      old_elements[0].remove()
      old_elements[0].remove()
      cardBody2[0].remove()
    }

    if (conditionC.indexOf("rain")> 0){
        body.style.backgroundColor = 'rgb(133, 133, 159)';

    } else {
        body.style.backgroundColor = 'rgb(95, 245, 250)';
    }

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    

    let cityHTML = document.createElement('p');
    cityHTML.innerHTML = `City: ${conditionC}`;
    cityHTML.className = 'card-text city';

    let currentCondition = document.createElement('p');
    currentCondition.innerHTML = `CC: ${cityObj.current.condition.text}`;
    currentCondition.className = 'card-text currentc';

    let currentTemp = document.createElement('p');
    currentTemp.innerHTML = `Current Temp: ${cityObj.current.temp_f}`;
    currentTemp.className = 'card-text currentt';
   
    let feelsLikeTemp = document.createElement('p');
    feelsLikeTemp.innerHTML = `Feels Like: ${cityObj.current.feelslike_f}`;
    feelsLikeTemp.className = 'card-text currentf';

    


    cardBody.append(cityHTML, currentCondition, currentTemp, feelsLikeTemp);
  
    // cityHTML.after(currentCondition);
    // currentCondition.after(currentTemp);
    // currentTemp.after(feelsLikeTemp);
    card.append(cardBody);

    



    

};

// one = {"current":
// {"last_updated_epoch":1680471000,
// "last_updated":"2023-04-02 17:30",
// "temp_c":9.4,
// //"temp_f":48.9,
// "is_day":1,
// "condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},
// "wind_mph":11.9,
// "wind_kph":19.1,
// "wind_degree":320,
// "wind_dir":"NW",
// "pressure_mb":1013.0,
// "pressure_in":29.92,
// "precip_mm":0.0,
// "precip_in":0.0,
// "humidity":19,
// "cloud":0,
// "feelslike_c":6.9,
// //"feelslike_f":44.3,
// "vis_km":16.0,
// "vis_miles":9.0,
// "uv":4.0,
// "gust_mph":12.5,
// "gust_kph":20.2}} 