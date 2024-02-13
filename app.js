let q = document.querySelector(".app .qs-container h2")
let answer = document.querySelector(".ans")
let next = document.querySelector(".app .qs-container .nextBtn")

const questions = [
    {
        question: "what is the best football team in the world?",
        ans: [
            {text: "man city", result: "false"},
            {text: "chelsea", result: "false"},
            {text: "real madrid", result: "true"},
            {text: "liverpool", result: "false"},
        ]
    },
    {
        question: "what is the most random football club ever?",
        ans: [
            {text: "man city", result: "false"},
            {text: "chelsea", result: "true"},
            {text: "real madrid", result: "false"},
            {text: "liverpool", result: "false"},
        ]
    },
    {
        question: "what is the most organised football team?",
        ans: [
            {text: "man city", result: "true"},
            {text: "chelsea", result: "false"},
            {text: "real madrid", result: "false"},
            {text: "liverpool", result: "false"},
        ]
    },
    {
        question: "which one is red?",
        ans: [
            {text: "man city", result: "false"},
            {text: "chelsea", result: "false"},
            {text: "real madrid", result: "false"},
            {text: "liverpool", result: "true"},
        ]
    },
]

let currentQindex = 0
let score = 0




function showQuestion() {
    resete()
    let currentQ = questions[currentQindex];
    let qNumber = currentQindex + 1;
    q.innerHTML = qNumber + "." + currentQ.question;
    
    currentQ.ans.forEach(anw => {
        let button = document.createElement("button")
        button.classList.add("answer")
        button.innerHTML = anw.text
        answer.appendChild(button)
        if (anw.result) {
            button.dataset.correct = anw.result
        }
        button.addEventListener("click", selectedAns)
    })
}

function resete() {
    while(answer.firstChild) {
        answer.removeChild(answer.firstChild)
    }
    disabled()
}
function selectedAns(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect){
        selectedBtn.classList.add("correct")
        score++
    } else {
        selectedBtn.classList.add("incorrect")

    }
    Array.from(answer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    })
    
    enable()
}


function showScore() {
    resete()
    q.innerHTML = `your score is ${score} out of ${questions.length}.`
    next.innerHTML = "play again!"
}

function handleNextBtn() {
        currentQindex++

    if (currentQindex < questions.length) {
        showQuestion()
    } else {
        showScore()
        enable()
    }
}

next.addEventListener("click", ()=> {
    if(currentQindex < questions.length) {
        handleNextBtn()
    } else {
        location.reload()
    }
})



    startQuiz()
    function startQuiz() {
        let currentQindex = 0
        let score = 0
        
        showQuestion()
    }

    function disabled() {
        next.disabled = true
    next.classList.add("dis")
    }

    function enable() {
        next.disabled = false;
        next.classList.remove("dis")
    }