

const API_KEY = "cab6c3a78d711ffeb7d027adffa4f2fc"
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); 
}

function onGeoError() {
    alert("Can't find you. No weather for you"); 
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 

