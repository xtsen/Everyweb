const questions = ["First Question", 
                    "Quand apparait le skate ?", 
                    "Ou commence le skate ?", 
                    "Combien de skaters en 2008 ?", 
                    "Touvrer l'intru :", 
                    "À la fin des années 70, quelle figure a révolutionné le skateboard ?", 
                    "En quel année le jeu Tony Hawk’s Pro Skater est il sorti ?", 
                    "Qui à fait en premier un 900 ?", 
                    "Quel est le slogan du fameux magazine Trasher ?"];

const Answers = ["vers 1930", "début 1900", "vers 1950", "vers 1980", 
                "Nantes", "Paris", "Californie", "New York", 
                "10 millions", "15 millions", "12 millions", "14 millions",
                "Cruiser", "Longboard", "Street", "Shortboard",
                "Le ollie", "Le hardflip", "Le kickflip", "Le 180",
                "1960", "1970", "1989", "1999", 
                "Tony Alva", "Eric Koston", "Steve Caballero", "Tony Hawk", 
                "Skate and Enjoy", "Skate and Destroy", "Skate and Jump", "Skate and Ride"
            ];
const StartAnswers = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36]

const nbOfQuestions = questions.length-1;


var score = 0;
// console.log(questions.length)

function correct() {
    titleQuestion = document.querySelector(".titleQuestion").innerText;
    var i=0;
    while (questions[i] != titleQuestion) {
        i++;
    }
    actualQuestion = i+1;
    if (actualQuestion == 2) {
        score += function1()
    }else if (actualQuestion == 3) {
        score += function2()
    }else if (actualQuestion == 4) {
        score += function3()
    }else if (actualQuestion == 5) {
        score += function4()
    }else if (actualQuestion == 6) {
        score += function5()
    }else if (actualQuestion == 7) {
        score += function6()
    }else if (actualQuestion == 8) {
        score += function7()
    }else if (actualQuestion == 9) {
        score += function8()
    }else {
        console.log("error")
    }
    console.log(score + " / 8 ")
    document.getElementById("score").innerText = score + " / 8 ";

    if (actualQuestion < 9) {
        window.setTimeout(startQuizz, 2000);
    }
    else {
        if (score >= 7) {
            document.getElementById("score").classList.add("goodScore");
            document.querySelector(".descriptionWebsite").innerText = "Vous avez très bien réussi ce test"
            document.querySelector(".littleWord").innerText = "Bravo !"
        }else if (score <= 5) {
            document.getElementById("score").classList.add("badScore");
            document.querySelector(".descriptionWebsite").innerText = "Vous êtes arrivé à bout du test"
            document.querySelector(".littleWord").innerText = "Mouai :/"
        } else {
            document.querySelector(".descriptionWebsite").innerText = "Vous êtes arrivé à bout du test"
            document.querySelector(".littleWord").innerText = "Bien !"
        }
        document.getElementById("score").style.opacity = "1";
        document.getElementById("header").style.opacity = "1";
        document.getElementById("question").style.display = "none";
        document.getElementById("counterQuestion").style.display ="none";
        
    }
}

function startQuizz() {
    
    document.getElementById("header").style.opacity = "0";
    document.getElementById("header").style.cursor = "default";
    document.getElementById("start").style.display = "none";
    document.getElementById("question").style.opacity ="1";
    document.getElementById("counterQuestion").style.opacity ="1";

    titleQuestion = document.querySelector(".titleQuestion").innerText;
    // console.log(i)
    // console.log(questions[i], titleQuestion)
    var i=0;
    while (questions[i] != titleQuestion) {
        i++;
    }
    actualQuestion = i+1;
    counter = document.getElementById("counterQuestion")
    counterQuestion.innerText = "Question : " + actualQuestion + " sur " + nbOfQuestions
    NextQuestion(actualQuestion)
    
}
function NextQuestion(nbActualQuestion) {

    document.querySelector(".titleQuestion").innerText = questions[nbActualQuestion];
    
    i = StartAnswers[nbActualQuestion-1]
    // console.log(i)
    max = i + 4
    nbLabel = 0
    // console.log(max)
    while (i < max) {
        i++;
        nbLabel += 1;
        idLabel = "labelAnswer" + String(nbLabel)
        idCheckbox = "CheckboxAnswer" + String(nbLabel)
        // console.log(idLabel)
        document.getElementById(idLabel).classList.remove("goodAnswer")
        document.getElementById(idCheckbox).checked = false
        document.getElementById(idLabel).innerText = Answers[i-1]
    }
}


function function1() {
    document.getElementById("labelAnswer3").classList.add("goodAnswer")
    if (document.getElementById("CheckboxAnswer3").checked) {
        return 1;   
    }else {
        return 0;
    }
}
function function2() {
    document.getElementById("labelAnswer3").classList.add("goodAnswer")
    if (document.getElementById("CheckboxAnswer3").checked) {
        return 1;   
    }else {
        return 0;
    }
}
function function3() {
    document.getElementById("labelAnswer2").classList.add("goodAnswer")
    if (document.getElementById("CheckboxAnswer2").checked) {
        return 1;   
    }else {
        return 0;
    }
}
function function4() {
    document.getElementById("labelAnswer4").classList.add("goodAnswer")
    if (document.getElementById("CheckboxAnswer4").checked) {
        return 1;   
    }else {
        return 0;
    }
}
function function5() {
    document.getElementById("labelAnswer1").classList.add("goodAnswer")
    if (document.getElementById("CheckboxAnswer1").checked) {
        return 1;   
    }else {
        return 0;
    }
}
function function6() {
    document.getElementById("labelAnswer4").classList.add("goodAnswer")
    if (document.getElementById("CheckboxAnswer4").checked) {
        return 1;   
    }else {
        return 0;
    }
}
function function7() {
    document.getElementById("labelAnswer4").classList.add("goodAnswer")
    if (document.getElementById("CheckboxAnswer4").checked) {
        return 1;   
    }else {
        return 0;
    }
}
function function8() {
    document.getElementById("labelAnswer2").classList.add("goodAnswer")
    if (document.getElementById("CheckboxAnswer2").checked) {
        return 1;   
    }else {
        return 0;
    }
}
// function function9() {
//     if (document.getElementById("CheckboxAnswer2").checked) {
//         return 1;   
//     }else {
//         return 0;
//     }
// }
// function function10() {
//     if (document.getElementById("CheckboxAnswer2").checked) {
//         return 1;   
//     }else {
//         return 0;
//     }
// }