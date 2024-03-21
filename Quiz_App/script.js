import questions from './questions.json' assert { type: "json" }

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentIndex = 0;
let score = 0;

const startQuiz = () => {
    currentIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
};

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentIndex];
    let questionNo = currentIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
    })
};

const resetState = () => {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

startQuiz();