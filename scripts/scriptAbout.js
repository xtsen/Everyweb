console.log("Un projet mené par Nesta et Louis")
console.log("le lien vers le github : https://github.com/xtsen/Skate-in-peace")

function load() {
    document.getElementById("body").className = "animationBody";
}
function showTitle(idDiv, idEye) {
    document.getElementById(idDiv).className="hideHeroTitle";
    document.getElementById(idEye).className="hideHeroTitle";
}