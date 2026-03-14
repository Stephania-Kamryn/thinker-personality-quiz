const quiz = document.getElementById("quiz");
const modal = document.getElementById("modal");
const modalC = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const ta=document.getElementById("tryagain");

quiz.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("button clicked");
    var score = 0;
    const responses = document.querySelectorAll('input[type="radio"]:checked');


    function updateScore(option) {
        if (option.value == 'A') {
            score += 4;
        }
        else if (option.value == 'B') {
            score += 3;
        }
        else if (option.value == 'C') {
            score += 2;
        }
        else {
            score += 1;
        }
    };

    responses.forEach(updateScore);

    function thinkerType(pts) {
        if (responses.length < 10) {
            alert("Please answer all questions before submitting.");
            return;
        }
        else {
            if (pts >= 35 && pts <= 40) {
                return "You are an Analyst, who is logical, structured, loves solving complex problems."
            }
            else if (pts >= 26 && pts <= 34) {
                return "You are an Innovator , who is creative, curious, enjoys new ideas and experimentation."
            }
            else if (pts >= 18 && pts <= 25) {
                return "You are a Connector, who is social, empathetic, values teamwork and relationships."
            }
            else {
                return "You are an Adventurer, who is bold, action-oriented, prefers learning by doing."
            }
        }

    };
    


    const result = thinkerType(score);

    //resultContent.innerText = "Results" + finalScore;
    const resultText = document.getElementById("resultText");

    if (result != undefined) {
        modal.classList.remove("hidden");
        resultText.innerText = result;
    }
    
    

})
ta.addEventListener("click",()=>{
    quiz.reset();
})


closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.classList.add("hidden");
        modal.style.display = "none";
    }
})



