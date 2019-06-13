class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
        this.temperature = document.getElementById('w-temp');
        
    }

    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        // need to convert this to centegrage from kelvin. basicaly it's whatever the result is minus 273.15
        var celsTemp = weather.main.temp - 275.15;
        var cT =  celsTemp.toFixed(2);
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        // this.temperature.textContent = `Temperature: ${weather.main.temp}`;
        this.temperature.textContent = `Temperature: ${cT}` +"℃";
        this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
        this.wind.textContent = `Wind: ${weather.wind.speed} mph`;
        this.pressure.textContent = `Air Pressure: ${weather.main.pressure}` + " bar";
       
    }
}


// Ok so we need to see what this API actually returns

// weather is an array
// example:

// main: "Rain"
// description: "shower rain"
// icon: "09d"

// main:
//     humidity: 93
//     pressure: 1004
//     temp: 285.41


// also

// wind: {speed:5.1, deg:210}

// visibility: 7000