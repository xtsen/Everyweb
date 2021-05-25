weekDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
yearMonths = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]

var Today = new Date();
var day = Today.getDay();
var month = Today.getMonth();
var date = Today.getDate();

function initDay () {
    document.getElementById("dayname").innerText = weekDays[day];
}
function initDate() {
    document.getElementById("dateName").innerText = date + " " + yearMonths[month];
}
initDay()
initDate()
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
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Météo à " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidité: " + humidity + "%";
    document.querySelector(".wind").innerText = "Vitesse du vent : " + speed + " km/h";
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

weather.fetchWeather("Aizenay");
