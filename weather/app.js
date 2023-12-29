const API_KEY =`55c540d16ec3d5d9da86da9d5b6ba855`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async(city) =>{
    console.log('fetching weather for city:',city)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=55c540d16ec3d5d9da86da9d5b6ba855`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    weather.innerHTML = `
        <div>
            <h2> ${data.main.temp}</h2>
            <h4> ${data.weather[0].main}</h4>
        </div>
    `;
};
if(data.cod=="404"){
    weather.innerHTML=`
        <h2> city not found</h2>
        return;
    `;
}

form.addEventListener("submit",function(event){
        getWeather(search.value)
        event.preventDefault()
    }
)