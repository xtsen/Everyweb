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

const CLEFAPI = '05102432d68f5cf4fbeab5852f88e77c';

let url = 'https://api.openweathermap.org/data/2.5/weather?q=Rouen&appid=05102432d68f5cf4fbeab5852f88e77c';
fetch(url).then((response) => 
    response.json().then((data) => console.log(data))
);
