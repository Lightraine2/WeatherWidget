// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object

const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();

// Get weather on DOM load

document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
// weather.changeLocation('Bristol', 'UK');
document.getElementById('w-change-btn').addEventListener('click', (e) => {

    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);
    // save to local storage
    storage.setLocationData(city, country);
    // Get and display weather
    getWeather();
    // close modal
    $('#locModal').modal('hide');
});



// actual function

function getWeather(){

    weather.getWeather()
    .then(results => {
        console.log(results)
            ui.paint(results);
    })
    .catch(err => console.log(err)); }


// test function

// weather.getWeather()
//     .then(results => {
//     console.log(results);
//     })
//     .catch(err => console.log(err)); 


