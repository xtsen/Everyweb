console.log("Un projet mené par Nesta et Louis")
console.log("le lien vers le github : https://github.com/xtsen/NSI-project")

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

window.onscroll = function() {SideSlideImage()};

function SideSlideImage() {
    if (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 2200) {
        document.getElementById("sideSlide").className = "sideSkateDescription";
    }else if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) {
        document.getElementById("sideSlide").className = "hiddenSideSlide";
    }else if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
        document.getElementById("sideSlide").className = "hiddenSideSlide";
    }
}