nbOfQuestions = 20;
questions = ["Qui suis je ?", "Qui es tu ?"]
Answers = ["Nesta", "Louis", "Lucie", "Marie", "Claude", "Marc", "Lourdingue", "Moi"]


function startQuizz() {
    document.getElementById("start").style.display = "none";

    document.querySelector(".question").style.display ="block"
    document.querySelector(".titleQuestion").innerText = questions[0];

    document.getElementById("labelAnswer1").innerText = Answers[0]
    document.getElementById("labelAnswer2").innerText = Answers[1]
    document.getElementById("labelAnswer3").innerText = Answers[2]
    document.getElementById("labelAnswer4").innerText = Answers[3]
}