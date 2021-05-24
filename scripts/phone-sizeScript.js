function checkWidth() {
    if (window.screen.width < 1000) {
        window.location.replace("../Everyweb/phone-Advertising.html")
    }

}
function redirectOnMain() {
    if (window.screen.width >= 1000) {
        window.location.replace("../Everyweb/index.html") 
    }
    else {
        document.getElementById('errorMessage').style.opacity = 1;
        document.getElementById('phone-size').innerText = window.screen.width + "px , " + window.screen.height + "px";
    }
}