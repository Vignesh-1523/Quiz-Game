let questions = [
    {
        question : "Which part of the brain responsible for the consciousness ?",
        answers : [
            {text: "Hippocampus", correct: false},
            {text: "Pons", correct: false},
            {text: "Prefrontal cortex", correct: true},
            {text: "Cerebellum", correct: false},
        ]
    },
    {
        question : "What do you think the major reason that is responsible for ghost dream or any kind of bad at night ?",
        answers : [
            {text: "Paranormal activity of ghost that's trying to communicate", correct: false},
            {text: "Brain's response to lack of oxygen supply", correct: true},
            {text: "Brain reconnecting events of bad emotions of the day", correct: false},
            {text: "The future which god wants to let you know", correct: false},
        ]
    },
    {
        question : "How many events a Brain does at a single time?",
        answers : [
            {text: "One event at a time", correct: true},
            {text: "Three events or more", correct: false},
            {text: "Both A and B", correct: false},
            {text: "none of the above", correct: false},
        ]
    },
    {
        question : "What will happen to speed of light when there's a rise in temperature ?",
        answers : [
            {text: "Increase", correct: false},
            {text: "Decrease", correct: false},
            {text: "Remains the same", correct: true},
            {text: "Increase at somepoint and come back to Normal speed", correct: false},
        ]
    },{
        question : "which country has six months night and six months day ?",
        answers : [
            {text: "Greenland", correct: true},
            {text: "Poland", correct: false},
            {text: "Georgia", correct: false},
            {text: "Norway", correct: true},
        ]
    },
    {
        question : "What color is the sun ?",
        answers : [
            {text: "Light orange", correct: false},
            {text: "Yellow", correct: false},
            {text: "Colorless", correct: false},
            {text: "White", correct: true},
        ]
    },
    {
        question : "What will be the anser when you divide 0/1 ?",
        answers : [
            {text: "1", correct: false},
            {text: "0", correct: true},
            {text: "infinity", correct: false},
            {text: "none of the above", correct: false},
        ]
    },
    {
        question : "How many times the light traves around the earth in one second ?",
        answers : [
            {text: "7.5 times", correct: true},
            {text: "6.5 times", correct: false},
            {text: "4 times", correct: false},
            {text: "7 times", correct: false},
        ]
    },
    {
        question : "What will happen when you look at  your plam for 15 seconds straight without blinking ?",
        answers : [
            {text: "slight dizziness", correct: false},
            {text: "Nothing", correct: true},
            {text: "Palm gets bigger and smaller slightly", correct: false},
            {text: "Palm gets shirnk only", correct: false},
        ]
    },
    {
        question : "Which sounds like the word 'EMPTY' ?",
        answers : [
            {text: "mpty", correct: true},
            {text: "mty", correct: true},
            {text: "mt", correct: true},
            {text: " ", correct: true},
        ] 
    }
];

let questionElement = document.querySelector(".question-area");
let answerBox = document.querySelector(".answer-box");
let nextButton = document.querySelector(".next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuiz();
}

function showQuiz() {
    reset();
    let currentQuestion = questions[currentQuestionIndex];
    let QuestionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = QuestionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(element => {
        let buttons = document.createElement("button");
        buttons.innerHTML = element.text;
        buttons.classList.add("btn");
        answerBox.appendChild(buttons);

        if(element.correct) {
            buttons.dataset.correct = element.correct;
        } 
        buttons.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e){
    let selectButton = e.target;
    let isCorrect = selectButton.dataset.correct === "true";
    if(isCorrect) {
        selectButton.classList.add("correct");
        score++;
    } else {
        selectButton.classList.add("incorrect");
    }
    Array.from(answerBox.children).forEach(element => {
        if(element.dataset.correct === "true"){
            element.classList.add("correct");
        }
        element.disabled = true;
    });
    nextButton.innerHTML = "Next";
    nextButton.style.display = "block";
}

function showScore(){
    reset();
    questionElement.innerHTML = `Your Score is ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function moveToNext(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuiz();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        moveToNext();
    } else {
        startQuiz();
    }
});

function reset(){
    nextButton.style.display = "none";
    while(answerBox.firstChild){
        answerBox.removeChild(answerBox.firstChild);
    }
}
startQuiz();