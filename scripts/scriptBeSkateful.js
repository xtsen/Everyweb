const questions = ["First Question", 
                    "Quand apparait le skate ?", 
                    "Ou commence le skate ?", 
                    "Combien de skaters en 2008 ?", 
                    "Quels styles de skate existent ?", 
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
const StartAnswers = [0, 4, 8, 12, 16, 20]

const nbOfQuestions = questions.length-1;
// console.log(questions.length)
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
    counterQuestion.innerText = "Question : " + actualQuestion + " / " + nbOfQuestions
    NextQuestion(actualQuestion)
    
}
function NextQuestion(nbActualQuestion) {

    document.querySelector(".titleQuestion").innerText = questions[nbActualQuestion];
    
    i = StartAnswers[nbActualQuestion-1]
    console.log(i)
    max = i + 4
    nbLabel = 0
    console.log(max)
    while (i < max) {
        i++;
        nbLabel += 1;
        id = "labelAnswer" + String(nbLabel)
        console.log(id)
        document.getElementById(id).innerText = Answers[i-1]
    }
}