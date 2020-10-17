//constants and variables

const API_KEY = CONFIG.openWeatherAPIKey;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

//cached element references
const $weatherForEl = $('#title');
const $temperature = $('#temp');
const $feelsLike = $('#index');
const $currentWeather = $('#desc');
const $form = $('form');
const $input = $('input[type="text"]');




let userInput; 

// event listeners 
$form.on('submit', handleGetData);

// functions
function handleGetData(event) {
    event.preventDefault();

    userInput = $input.val();

    $.ajax(BASE_URL + `q=${userInput}&` + `units=imperial&appid=` +API_KEY)
    .then(function(data) {
        console.log('DATA: ', data);

        render(data);
    }, function(error) {
        console.log('Error: ', error);
    })
}


function render(data) {
    $weatherForEl.text('Weather For: ' + data.name);
    $temperature.text('Temprature: ' + data.main.temp);
    $feelsLike.text('Feels Like: ' + data.main.feels_like);
    $currentWeather.text('Current Weather: ' + data.weather[0].description);
};

// $currentWeather.grep(data.weather[0].description, funcition('cloud')) {
// render('<img src="/.img/yang-yang-HqprR1VEDjw-unsplash.jpg">'); 
// };


if($currentWeather.text === 'scattered clouds') {
    render('<img src="/.img/yang-yang-HqprR1VEDjw-unsplash.jpg">');
}


    // p id="title"></p>
    //     <p id="temp"></p>
    //     <p id="index"></p>
    //     <p id="desc"></p>