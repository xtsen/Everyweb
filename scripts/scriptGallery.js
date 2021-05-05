console.log("Un projet mené par Nesta et Louis")
console.log("le lien vers le github : https://github.com/xtsen/Skate-in-peace")

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
function search() {
    // Reset
    AllVideos = ["containerVideo1", "containerVideo2", "containerVideo3", "containerVideo4", "containerVideo5", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo12", "containerVideo13", "containerVideo14", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo18", "containerVideo19", "containerVideo20"]
    AllVideos.forEach(function(container) {
        document.getElementById(container).style.display="flex"
    })
    searchName();
    searchTricks();
}
// Search function
function searchName() {
    // Recuperation de la valeur du filtre
    choiceName = document.getElementById("name-select").value;

    // Enumeration des container
    MatysVideos = ["containerVideo2", "containerVideo3", "containerVideo5", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo12", "containerVideo13", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo18", "containerVideo20"]
    BaptisteVideos = ["containerVideo1", "containerVideo3", "containerVideo4", "containerVideo5", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo12", "containerVideo13", "containerVideo14", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo18", "containerVideo19", "containerVideo20"]
    MaxenceVideos = ["containerVideo1", "containerVideo2", "containerVideo3", "containerVideo4", "containerVideo5", "containerVideo6", "containerVideo7", "containerVideo12", "containerVideo14", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo18", "containerVideo19", "containerVideo20"]
    AllanVideos = ["containerVideo1", "containerVideo2", "containerVideo4", "containerVideo5", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo12", "containerVideo13", "containerVideo14", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo19"]
    GautierVideos = ["containerVideo1", "containerVideo2", "containerVideo3", "containerVideo4", "containerVideo5", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo12", "containerVideo13", "containerVideo14", "containerVideo15", "containerVideo16", "containerVideo18", "containerVideo19", "containerVideo20"]
    EmileVideos = ["containerVideo1", "containerVideo2", "containerVideo3", "containerVideo4", "containerVideo5", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo13", "containerVideo14", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo18", "containerVideo19", "containerVideo20"]
    MickaelVideos = ["containerVideo1", "containerVideo2", "containerVideo3", "containerVideo4", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo12", "containerVideo13", "containerVideo14", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo18", "containerVideo19", "containerVideo20"]

    if (choiceName == "Matys") {
        MatysVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceName == "Baptiste") {
        BaptisteVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceName == "Maxence") {
        MaxenceVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceName == "Allan") {
        AllanVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceName == "Gautier") {
        GautierVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceName == "Emile") {
        EmileVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceName == "Mickael") {
        MickaelVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
}
function searchTricks() {
    // Recuperation de la valeur du filtre
    choiceTricks= document.getElementById("tricks-select").value;

    // Enumeration des container
    OllieVideos = ["containerVideo1", "containerVideo2", "containerVideo3", "containerVideo4", "containerVideo5", "containerVideo12", "containerVideo13", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo18", "containerVideo19", "containerVideo20"]
    SlideVideos = ["containerVideo1", "containerVideo2", "containerVideo3", "containerVideo4", "containerVideo5", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo14", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo18", "containerVideo19", "containerVideo20"]
    BacksideVideos = ["containerVideo2", "containerVideo3", "containerVideo4", "containerVideo5", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo12", "containerVideo13", "containerVideo14", "containerVideo15", "containerVideo18", "containerVideo19", "containerVideo20"]
    KickflipVideos = ["containerVideo1", "containerVideo2", "containerVideo5", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo12", "containerVideo13", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo18", "containerVideo19"]
    ManualVideos = ["containerVideo1", "containerVideo2", "containerVideo3", "containerVideo4", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo12", "containerVideo13", "containerVideo14", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo18", "containerVideo19", "containerVideo20"]
    VarialVideos = ["containerVideo1", "containerVideo2", "containerVideo3", "containerVideo4", "containerVideo5", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo12", "containerVideo13", "containerVideo14", "containerVideo16", "containerVideo17", "containerVideo18", "containerVideo19", "containerVideo20"]
    PopeShovItVideos = ["containerVideo1", "containerVideo2", "containerVideo3", "containerVideo4", "containerVideo5", "containerVideo6", "containerVideo7", "containerVideo8", "containerVideo9", "containerVideo11", "containerVideo12", "containerVideo13", "containerVideo14", "containerVideo15", "containerVideo16", "containerVideo17", "containerVideo19", "containerVideo20"]

    if (choiceTricks == "ollie") {
        OllieVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceTricks == "slide") {
        SlideVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceTricks == "backside") {
        BacksideVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceTricks == "kickflip") {
        KickflipVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceTricks == "manual") {
        ManualVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceTricks == "varial") {
        VarialVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
    else if (choiceTricks == "popeShovIt") {
        PopeShovItVideos.forEach(element => document.getElementById(element).style.display = "none");
    }
}