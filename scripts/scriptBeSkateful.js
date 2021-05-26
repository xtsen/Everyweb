const nbOfQuestions = 20;
const questions = ["First Question", "Qui suis je ?", "Qui es tu ?", "Lolilol"];
const Answers = ["Nesta", "Louis", "Lucie", "Marie", "Claude", "Marc", "Lourdingue", "Moi", "Claude", "Marc", "Lourdingue", "Moi"];
const StartAnswers = [0, 4, 8]

function startQuizz() {
    var i=0;
    document.getElementById("start").style.display = "none";

    document.getElementById("question").style.display ="block";
    titleQuestion = document.querySelector(".titleQuestion").innerText;
    // console.log(i)
    // console.log(questions[i], titleQuestion)
    while (questions[i] != titleQuestion) {
        i++;
    }
    actualQuestion = i+1;
    console.log("Question : " + actualQuestion)
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