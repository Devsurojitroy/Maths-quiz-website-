
// Array of quiz questions with answers
const quizData = [
    {
        question: "What is 5 + 3?",
        options: ["5", "7", "8", "10"],
        answer: 2
    },
    {
        question: "What is 10 - 6?",
        options: ["4", "5", "6", "8"],
        answer: 0
    },
    {
        question: "What is 7 x 3?",
        options: ["21", "24", "18", "20"],
        answer: 0
    },
    {
        question: "What is 12 / 4?",
        options: ["4", "3", "6", "2"],
        answer: 1
    },
    {
        question: "What is the square root of 81?",
        options: ["7", "8", "9", "10"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;

const questionElement = document.getElementById("question");
const optionsElements = document.querySelectorAll(".option");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("time");
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results-container");

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 30;
    showQuestion();
    resultsContainer.style.display = "none";
    quizContainer.style.display = "block";
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElements.forEach((optionElement, index) => {
        optionElement.textContent = currentQuizData.options[index];
    });
}

function selectOption(selectedOption) {
    if (quizData[currentQuestion].answer === selectedOption) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    quizContainer.style.display = "none";
    resultsContainer.style.display = "block";
    scoreElement.textContent = score + " / " + quizData.length;
}

window.onload = startQuiz;
