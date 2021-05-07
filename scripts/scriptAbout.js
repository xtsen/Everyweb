console.log("Un projet mené par Nesta et Louis")
console.log("le lien vers le github : https://github.com/xtsen/Skate-in-peace")

function flouBody(hover) {
    if (hover == true) {
        document.getElementById("content").className="flouBody";
    }
    else if(hover == false) {
        console.log("carré")
        document.getElementById("content").className="";
    }
    
}
