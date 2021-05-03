console.log("Un projet mené par Nesta et Louis")
console.log("le lien vers le github : https://github.com/xtsen/Skate-in-peace")


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