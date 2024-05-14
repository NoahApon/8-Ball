let answerEl = document.getElementById("answer");
let inputQuestion = document.getElementById("in-question");
document.getElementById("magic-ball").addEventListener("click", eightBallClick);

function eightBallClick() {
    let randNum = Math.floor(Math.random() * 5 + 1);
    console.log(randNum);
    if (inputQuestion.value.toLowerCase() == "") {
        answerEl.innerHTML = "Please ask a question...";
    } else if (inputQuestion.value.toLowerCase() == "will you lose") {
        answerEl.innerHTML = "Nah I'd Win";
    } else if (
    inputQuestion.value.toLowerCase() == "am i an idiot" || 
    inputQuestion.value.toLowerCase() == "am i ugly" ||
    inputQuestion.value.toLowerCase() == "am i stupid" ||
    inputQuestion.value.toLowerCase() == "am i fat" ||
    inputQuestion.value.toLowerCase() == "am i the worst" ||
    inputQuestion.value.toLowerCase() == "am i annoying" ||
    inputQuestion.value.toLowerCase() == "am i a bad person" 
    ){
        string = "Yes, you are the most horrific, annoying, beyond irratating worthlesss piece of trash that has ever existed on this planet and you deserve nothing but the worst.";
        answerEl.innerHTML = string   
    } else if (randNum == 5) {
         answerEl.innerHTML = "Without a Doubt.";
    } else if (randNum == 4) {
        answerEl.innerHTML = "As I see it, Yes.";
    } else if (randNum == 3) {
        answerEl.innerHTML = "Concentrate and ask again.";
    } else if (randNum == 2) {
        answerEl.innerHTML = "Don't count on it.";
    } else {
        answerEl.innerHTML = "Outlook not so good.";
    }
}