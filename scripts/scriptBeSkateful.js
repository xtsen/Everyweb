const nbOfQuestions = 20;
const questions = ["Qui suis je ?", "Qui es tu ?"];
const Answers = ["Nesta", "Louis", "Lucie", "Marie", "Claude", "Marc", "Lourdingue", "Moi"];

function startQuizz() {
    document.getElementById("start").style.display = "none";

    document.getElementById("question").style.display ="block";

    q = 1;

    while (q < nbOfQuestions) {
        NextQuestion(q)
        q++;
    }
    
}
function NextQuestion(nbActualQuestion) {
    console.log("next Question")

    document.querySelector(".titleQuestion").innerText = questions[nbActualQuestion];

    i = 0;
    while (i < i+4) {
        i++;
        id = "labelAnswer" + String(i)
        document.getElementById(id).innerText = Answers[i-1]
    }
    i += 4;
}