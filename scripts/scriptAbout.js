console.log("Un projet mené par Nesta et Louis")
console.log("le lien vers le github : https://github.com/xtsen/Skate-in-peace")

function load() {
    document.getElementById("body").className = "animationBody";
}
function showTitle(idDiv, idEye) {
    document.getElementById(idDiv).className="hideHeroTitle";
    document.getElementById(idEye).className="hideHeroTitle";
}

window.onscroll = function() {SideSlideImage()};

function SideSlideImage() {
    if (document.documentElement.scrollTop > 350 && document.documentElement.scrollTop < 400) {
        document.getElementById("hideHeroTitle2").className = "hideHeroTitle";
        document.getElementById("eye2").className = "hideHeroTitle";
    }else if (document.documentElement.scrollTop < 300) {
        document.getElementById("hideHeroTitle1").className = "hideHeroTitle";
        document.getElementById("eye1").className = "hideHeroTitle";
    }else if (document.documentElement.scrollTop > 450) {
        document.getElementById("hideHeroTitle3").className = "hideHeroTitle";
        document.getElementById("eye3").className = "hideHeroTitle";
    }
}