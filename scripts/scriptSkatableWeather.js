// Date
weekDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
yearMonths = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]

var Today = new Date();
var day = Today.getDay();
var month = Today.getMonth();
var date = Today.getDate();
var hours = Today.getHours();
var minutes = Today.getMinutes();

function initDay () {
    document.getElementById("dayname").innerText = weekDays[day];
}
function initTime() {
    document.getElementById("time").innerText = hours + "h" + minutes ;
}
function initDate() {
    document.getElementById("dateName").innerText = date + " " + yearMonths[month];
}
initDay()
initTime()
initDate()

// Weather
let weather = {
  apiKey: "05102432d68f5cf4fbeab5852f88e77c",
  fetchWeather: function (city) {
    fetch( "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey )
      .then((response) => {
        if (!response.ok) {
          alert("Aucune météo trouvé.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {

    const { name } = data;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Météo à " + name;
    document.querySelector(".temp").innerText = temp + "°C";
    document.getElementById("HumidityLevel").innerText = humidity + "%";
    document.querySelector(".humidity").innerText = "Humidité: " + humidity + "%";
    document.querySelector(".wind").innerText = "Vitesse du vent : " + speed + " km/h";

    // Check if you can skate
    if (speed <= 15 && humidity <= 80) {
      document.getElementById("skatable").innerText = "Vas skater !";
      document.getElementById("skatable").style.backgroundColor = "#408103"
    }
    else if(speed >= 20){
      document.getElementById("skatable").innerText = "C'est chaud de skater";
      document.getElementById("skatable").style.backgroundColor = "#812003"
    }
    else if (humidity >= 80) {
      document.getElementById("skatable").innerText = "C'est chaud de skater";
      document.getElementById("skatable").style.backgroundColor = "#812003"
    }
  },
  search: function () {
    this.fetchWeather(document.getElementById("inputCity").value);
  },
};

document.querySelector(".btnCity").addEventListener("click", function () {
  weather.search();
});

document
  .getElementById("inputCity")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

function searchCity() {
  weather.fetchWeather(document.getElementById("inputCity").value);
}

// Responsive 
const width = window.screen.width
console.log(width)

function changePage1to2() {
  if (width < 800) {

    document.getElementById("secondPart").style.opacity = "1";
    document.getElementById("secondPart").style.transform = "translateY(5%)"
  }
}
function changePage2to1() {
  if (width < 800) {
    document.getElementById("secondPart").style.transform = "translateY(-90%)"
    document.getElementById("secondPart").style.opacity = "0";
  }
}
