console.log("Un projet mené par Nesta et Louis")
console.log("le lien vers le github : https://github.com/xtsen/Skate-in-peace")

function load() {
    document.getElementById("body").className = "animationBody";

}

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

function videoExpend(id) {
    var clip = document.getElementById(id);
    clip.style.display = "block";
}
function videoClose(idSpan, idVideo) {
    var clip = document.getElementById(idSpan);
    clip.style.display = "none";
    video = document.getElementById(idVideo);
    video.pause();
    video.currentTime = 0;
}

if (window.screen.availWidth > 1020) {
    window.onscroll = function() {SideSlideImageDesktop()};
    console.log("desktop size")
}
else if (window.screen.availWidth > 319) {
    window.onscroll = function() {SideSlideImagePhone()};
    console.log("phone size")
} 
function SideSlideImageDesktop() {
    if (document.documentElement.scrollTop > 650 && document.documentElement.scrollTop < 2100) {
        document.getElementById("sideSlide").className = "sideSkateDescription";
    }else if (document.body.scrollTop < 650 || document.documentElement.scrollTop < 650) {
        document.getElementById("sideSlide").className = "hiddenSideSlide";
    }else if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
        document.getElementById("sideSlide").className = "hiddenSideSlide";
    }
} 
function SideSlideImagePhone() {
    if (document.documentElement.scrollTop > 350 && document.documentElement.scrollTop < 1000) {
        document.getElementById("sideSlide").className = "sideSkateDescription";
    }else if (document.body.scrollTop < 200 || document.documentElement.scrollTop < 200) {
        document.getElementById("sideSlide").className = "hiddenSideSlide";
    }else if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("sideSlide").className = "hiddenSideSlide";
    }
} 