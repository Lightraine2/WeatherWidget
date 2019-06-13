class Weather {
    constructor(city, country) {
        this.apiKey = '9dd235ffc0fefb18e848a81d3ea6edf6';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API  using the Fetch api. meta. 
    // this is using the openweathermap api which may not translate exactly

    // fetch is working but getting cors error. Try with different API
    async getWeather() {
//        const response = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}]&appid=b6907d289e10d714a6e88b30761fae22`);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);
       
        const responseData = await response.json();
        // note that this needs to return the object within the api
        // so this could be responseData.current_observation;
        return responseData;
    }

    // Change weather location

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}