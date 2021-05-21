var TitleSectionPlus = document.getElementById("titlePlaylistPlus");
var TitleSectionMinus = document.getElementById("titlePlaylistMinus");

var deezerWidgets = document.getElementById("deezerWidget")

function changeNameTitle(TrueOrFalse) { 
    if (TrueOrFalse == true) {
        TitleSectionPlus.style.display="none";
        TitleSectionMinus.style.display="block";
        deezerWidgets.style.display="block";
    }
    if (TrueOrFalse == false) {
        TitleSectionPlus.style.display="block";
        TitleSectionMinus.style.display="none";
        deezerWidgets.style.display="none";
    }
}