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
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
    })
};

const resetState = () => {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
};

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
};

const showScore = () => {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
};

const handleNextButton = () => {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
};


nextButton.addEventListener('click', (e) => {
    if (currentIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();