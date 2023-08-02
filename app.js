// preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none"
})

// home display
window.addEventListener("hashchange", function () {
    const url = this.window.location.href;
    const [_, section = null] = url.split("#");

    if (section === "home" || !section) {
        document.getElementById("home").style.display = "inline-table";
    } else {
        document.getElementById("home").style.display = "none";

    }
});

// read more
let readLess = document.getElementById("readless").style.display = "none"

function handleBtn() {
    let fullText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sedet. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore corrupti nemo, exercitationem facilis sequi. Ab, architecto quam tenetur unde rerum et earum amet. Voluptate, distinctio nihil impedit quaerat perferendis alias eligendi eius velit, facere illum provident. Consectetur, eligendi similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex nemo quo! Esse, aspernatur, laborum molestiae labore nesciunt minus ab earum aut necessitatibus iure quam, accusantium asperiores repellendus eaque. Consectetur.";
    document.getElementById("aboutPara").innerHTML = fullText;
    let readBtn = document.getElementById("readBtn").style.display = "none";
    let readLess = document.getElementById("readless").style.display = "block"
}
function handleLessBtn() {
    let originalText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sedet. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis."
    document.getElementById("aboutPara").innerHTML = originalText;
    readBtn.style.display = "block"
    readBtn.style.marginLeft = "30%"
    let readLess = document.getElementById("readless").style.display = "none"
}

// number
let number = document.getElementById("number")
let counter = 0;
setInterval(() => {
    if (counter == 232) {
        clearInterval()
    }
    else {
        counter += 1;
        number.innerHTML = counter;
    }

}, 5)
let numberTwo = document.getElementById("number-two")
let counterTwo = 0;
setInterval(() => {
    if (counterTwo == 521) {
        clearInterval()
    }
    else {
        counterTwo += 1;
        numberTwo.innerHTML = counterTwo;
    }

}, 2)
let numberThree = document.getElementById("number-three")
let counterThree = 0;
setInterval(() => {
    if (counterThree == 1453) {
        clearInterval()
    }
    else {
        counterThree += 1;
        numberThree.innerHTML = counterThree;
    }

}, -10)
let numberFour = document.getElementById("number-four")
let counterFour = 0;
setInterval(() => {
    if (counterFour == 32) {
        clearInterval()
    }
    else {
        counterFour += 1;
        numberFour.innerHTML = counterFour;
    }

}, 30)

// login
function validateForm() {
    // Get input values
    var username = document.getElementById("username").value;
    var phoneNumber = document.getElementById("phone_number").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    // Validation rules
    var usernamePattern = /^[a-zA-Z0-9]{5,}$/;
    var phonePattern = /^\d{10}$/;

    // Validation checks
    if (!username.match(usernamePattern)) {
      alert("Username should be at least 5 characters long and can only contain letters and numbers.");
      return false;
    }

    if (!phoneNumber.match(phonePattern)) {
      alert("Phone number should be exactly 10 digits long.");
      return false;
    }

    if (password.length < 8) {
      alert("Password should be at least 8 characters long.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    return true;}
// faqs

function toggleAnswer(questionNumber) {
    var answer = document.getElementsByClassName('answer')[questionNumber - 1];
    var showIcon = document.getElementsByClassName('show-icon')[questionNumber - 1];
    var hideIcon = document.getElementsByClassName('hide-icon')[questionNumber - 1];

    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        showIcon.style.display = 'none';
        hideIcon.style.display = 'inline';
    } else {
        answer.style.display = 'none';
        showIcon.style.display = 'inline';
        hideIcon.style.display = 'none';
    }
}

// arrow
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressVal = document.getElementById("progress-val");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid"
    }
    else {
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;

    });

};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// html quiz
const questions = [
    // 1
    {
        question: "What is HTML stands for?",
        answer: [
            { text: "Hyper Text Multiple Language", correct: false },
            { text: "Hyper Text Multi Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Macro   m Language", correct: false }
        ]
    },
    // 2
    {
        question: "How many types of heading does an HTML contain?",
        answer: [
            { text: "Six", correct: true },
            { text: "five", correct: false },
            { text: "Four", correct: false },
            { text: "Three", correct: false }
        ]
    },
    // 3
    {
        question: "Which HTML tag is used to display the data in the tabular form?",
        answer: [
            { text: "tr", correct: false },
            { text: "td", correct: false },
            { text: "tbody", correct: false },
            { text: "table", correct: true }
        ]
    },
    // 4
    {
        question: "Which tag is used to enter the hyperlink ? ",
        answer: [
            { text: "link tag", correct: false },
            { text: "anchor tag", correct: true },
            { text: "break tag", correct: false },
            { text: "script tag", correct: false }
        ]
    },
    // 5
    {
        question: "which tag is inserted for line break ?",
        answer: [
            { text: "hr", correct: false },
            { text: "break", correct: false },
            { text: "lb", correct: false },
            { text: "br", correct: true }
        ]
    },
    // 6
    {
        question: "which tag is used for largest heading ?",
        answer: [
            { text: "h4", correct: false },
            { text: "h3", correct: false },
            { text: "h2", correct: false },
            { text: "h1", correct: true }
        ]
    },
    // 7
    {
        question: "which tag is inserted for navbar ?",
        answer: [
            { text: "nav", correct: true },
            { text: "navbar", correct: false },
            { text: "bar", correct: false },
            { text: "navigation", correct: false }
        ]
    },
    // 8
    {
        question: "which tag makes the text bold ?",
        answer: [
            { text: "hr", correct: false },
            { text: "span", correct: false },
            { text: "b", correct: true },
            { text: "br", correct: false }
        ]
    },
    // 9
    {
        question: "which one is a semantic tag ?",
        answer: [
            { text: "hr", correct: false },
            { text: "break", correct: false },
            { text: "lb", correct: false },
            { text: "header", correct: true }
        ]
    },
    // 10
    {
        question: "which one is not a semantic tag ?",
        answer: [
            { text: "h1", correct: true},
            { text: "header", correct: false},
            { text: "section", correct: false},
            { text: "footer", correct: false}
        ]
    },
    // 11
    {
        question: "which attribute is used for opening a link in new tab ?",
        answer: [
            { text: "newtab", correct: false },
            { text: "target", correct: false },
            { text: "target:newTab", correct: false },
            { text: "target:blank", correct: true }
        ]
    },
    // 12
    {
        question: "which tag can be used for writing a message ?",
        answer: [
            { text: "input", correct: false },
            { text: "textasrea", correct: true },
            { text: "message", correct: false },
            { text: "button", correct: false }
        ]
    },
    // 13
    {
        question: "which tag displays button in HTML ?",
        answer: [
            { text: "submit", correct: false },
            { text: "btn", correct: false },
            { text: "button", correct: true },
            { text: "input", correct: false }
        ]
    },
    // 14
    {
        question: "which one is a self closing tag ?",
        answer: [
            { text: "b", correct: false },
            { text: "br", correct: true },
            { text: "h1", correct: false },
            { text: "p", correct: false }
        ]
    },
    // 15
    {
        question: "which tag is used for giving the title to the page ?",
        answer: [
            { text: "meta", correct: false },
            { text: "html", correct: false },
            { text: "document", correct: false },
            { text: "title", correct: true }
        ]
    },
]


const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answerBtn");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}
function resetState() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextBtn.style.display = "block"
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = "block"
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz()


// css quiz
const secondQuestions = [
    // 1
    {
        secondQuestion: "What is CSS stands for?",
        secondAnswer: [
            { text: "computer style sheet", correct: false },
            { text: "creative style sheet", correct: false },
            { text: "Cascading Style Sheet", correct: true },
            { text: "colorful style sheet", correct: false }
        ]
    },
    // 2
    {
        secondQuestion: "Where in an HTML document is the correct place to refer to an external style sheet?",
        secondAnswer: [
            { text: "head", correct: true },
            { text: "body", correct: false },
            { text: "end of the document", correct: false },
            { text: "all of the above", correct: false }
        ]
    },
    // 3
    {
        secondQuestion: "Which HTML tag is used to define an internal style sheet?",
        secondAnswer: [
            { text: "script", correct: false },
            { text: "css", correct: false },
            { text: "style", correct: true },
            { text: "all of the above", correct: false }
        ]
    },
      // 4
      {
        secondQuestion: "Which HTML attribute is used to define inline styles? ",
        secondAnswer: [
            { text: "font", correct: false },
            { text: "style", correct: true },
            { text: "class", correct: false },
            { text: "target", correct: false }
        ]
    },
    // 5
    {
        secondQuestion: "How do you insert a comment in a CSS file?",
        secondAnswer: [
            { text: "//this is a comment//", correct: false },
            { text: "//this is comment", correct: false },
            { text: "'this is a comment", correct: false },
            { text: "/* This is a comment */", correct: true }
        ]
    },
    // 6
    {
        secondQuestion: "Which property is used to change the background color?",
        secondAnswer: [
            { text: "b-color", correct: false },
            { text: "color", correct: false },
            { text: "bg-color", correct: false },
            { text: "background-color", correct: true }
        ]
    },
    // 7
    {
        secondQuestion: "Which CSS property is used to change the text color of an element?",
        secondAnswer: [
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "fg color", correct: false },
            { text: "font color", correct: false }
        ]
    },
    // 8
    {
        secondQuestion: "Which CSS property controls the text size?",
        secondAnswer: [
            { text: "text size", correct: false },
            { text: "text style", correct: false },
            { text: "font size", correct: true },
            { text: "font style", correct: false }
        ]
    },
    // 9
    {
        secondQuestion: "How do you make each word in a text start with a capital letter?",
        secondAnswer: [
            { text: "transform: uppercase", correct: false },
            { text: "text-transform: uppercase", correct: false },
            { text: "transform: capitalize", correct: false },
            { text: "text-transform: capitalize", correct: true }
        ]
    },
    // 10
    {
        secondQuestion: "Which property is used to change the font of an element?",
        secondAnswer: [
            { text: "font-family", correct: true},
            { text: "font-style", correct: false},
            { text: "font-size", correct: false},
            { text: "font-weight", correct: false}
        ]
    },
    // 11
    {
        secondQuestion: "How do you make the text bold?",
        secondAnswer: [
            { text: "font:bold;", correct: false },
            { text: "font-style:bold;", correct: false },
            { text: "font-size:bold;", correct: false },
            { text: "font-weight:bold;", correct: true }
        ]
    },
    // 12
    {
        secondQuestion: "Which property is used to change the left margin of an element?",
        secondAnswer: [
            { text: "padding-left", correct: false },
            { text: "margin-left", correct: true },
            { text: "margin", correct: false },
            { text: "padding", correct: false }
        ]
    },
    // 13
    {
        secondQuestion: "How do you select an element with id 'demo'?",
        secondAnswer: [
            { text: ".demo", correct: false },
            { text: "*demo", correct: false },
            { text: "#demo", correct: true },
            { text: "demo", correct: false }
        ]
    },
    // 14
    {
        secondQuestion: "How do you select elements with class name 'test'?",
        secondAnswer: [
            { text: "test", correct: false },
            { text: ".test", correct: true },
            { text: "#test", correct: false },
            { text: "*test", correct: false }
        ]
    },
    // 15
    {
        secondQuestion: "What is the default value of the position property?",
        secondAnswer: [
            { text: "relative", correct: false },
            { text: "absolute", correct: false },
            { text: "fixed", correct: false },
            { text: "static", correct: true }
        ]
    },
    ]
    
    const secondQuestionElement = document.getElementById("secondQue");
    const answerButon = document.getElementById("ansBtn");
    const nextButton = document.getElementById("nextBtn");
    
    let secondCurrentQuestionIndex = 0;
    let secondScore = 0;
    
    function startSecondQuiz() {
        secondCurrentQuestionIndex = 0;
        secondScore = 0;
        nextButton.innerHTML = "Next";
        showQues();
    }
    
    function showQues() {
        resetQuiz();
        let curQuestion = secondQuestions[secondCurrentQuestionIndex];
        let questionNumber = secondCurrentQuestionIndex + 1;
        secondQuestionElement.innerHTML = questionNumber + ". " + curQuestion.secondQuestion;
        curQuestion.secondAnswer.forEach(answer => {
            const buttonChange = document.createElement("button");
            buttonChange.innerHTML = answer.text;
            buttonChange.classList.add("btn");
            answerButon.appendChild(buttonChange);
            if (answer.correct) {
                buttonChange.dataset.correct = answer.correct;
            }
            buttonChange.addEventListener("click", selectAns)
        })
    }
    function resetQuiz() {
        nextButton.style.display = "none";
        while (answerButon.firstChild) {
            answerButon.removeChild(answerButon.firstChild);
        }
    }
    function selectAns(e) {
        const selectBtn = e.target;
        const itsCorrect = selectBtn.dataset.correct === "true";
        if (itsCorrect) {
            selectBtn.classList.add("correct");
            secondScore++;
        }
        else {
            selectBtn.classList.add("incorrect")
        }
        Array.from(answerButon.children).forEach(buttons => {
            if (buttons.dataset.correct === "true") {
                buttons.classList.add("correct");
            }
            buttons.disabled = "true";
        });
        nextButton.style.display = "block"
    }
    function showQuizScore() {
        resetQuiz();
        secondQuestionElement.innerHTML = `You Scored ${secondScore} out of ${secondQuestions.length} !`;
        nextButton.innerHTML = "Play Again"
        nextButton.style.display = "block"
    }
    function handleNextBtn() {
        secondCurrentQuestionIndex++;
        if (secondCurrentQuestionIndex < secondQuestions.length) {
            showQues();
        }
        else {
            showQuizScore();
        }
    }
    nextButton.addEventListener("click", () => {
        if (secondCurrentQuestionIndex < secondQuestions.length) {
            handleNextBtn();
        }
        else {
            startSecondQuiz();
        }
    })
    
    startSecondQuiz()


    // js quiz 
const thirdQuestions = [
    // 1
    {
        thirdQuestion: "Inside which HTML element do we put the JavaScript?",
        thirdAnswer: [
            { text: "javaScript", correct: false },
            { text: "js", correct: false },
            { text: "script", correct: true },
            { text: "scripting", correct: false }
        ]
    },
    // 2
    {
        thirdQuestion: "Where is the correct place to insert a JavaScript?",
        thirdAnswer: [
            { text: "both the head and body section", correct: true },
            { text: "body", correct: false },
            { text: "head", correct: false },
            { text: "all of the above", correct: false }
        ]
    },
    // 3
    {
        thirdQuestion: "The external JavaScript file must contain the <script> tag.",
        thirdAnswer: [
            { text: "false", correct: false },
            { text: "true", correct: true }
        ]
    },
      // 4
      {
        thirdQuestion: "How do you write 'Hello World' in an alert box? ",
        thirdAnswer: [
            { text: "alertBox('Hello World');", correct: false },
            { text: "alert('Hello World');", correct: true },
            { text: "msg('Hello World');", correct: false },
            { text: "msgBox('Hello World');", correct: false }
        ]
    },
    // 5
    {
        thirdQuestion: "How do you create a function in JavaScript?",
        thirdAnswer: [
            { text: "myFunction()", correct: false },
            { text: "function:myFunction()", correct: false },
            { text: "function=myFunction()", correct: false },
            { text: "function myFunction()", correct: true }
        ]
    },
    // 6
    {
        thirdQuestion: "How do you call a function named 'myFunction'?",
        thirdAnswer: [
            { text: "call function myFunction", correct: false },
            { text: "function myFunction()", correct: false },
            { text: "call myFunction()", correct: false },
            { text: "myFunction()", correct: true }
        ]
    },
    // 7
    {
        thirdQuestion: "How to write an IF statement in JavaScript?",
        thirdAnswer: [
            { text: "if (i == 5)", correct: true },
            { text: "if i == 5 then", correct: false },
            { text: "if i = 5 then", correct: false },
            { text: "if i = 5", correct: false }
        ]
    },
    // 8
    {
        thirdQuestion: "How does a FOR loop start?",
        thirdAnswer: [
            { text: "for(i <= 5; i++)", correct: false },
            { text: "for i = 1 to 5", correct: false },
            { text: "for(var i = 0; i=5; i++)", correct: true },
            { text: "for i=0; i<5;", correct: false }
        ]
    },
    // 9
    {
        thirdQuestion: "How can you add a comment in a JavaScript?",
        thirdAnswer: [
            { text: "'this is a comment", correct: false },
            { text: "/*this is a comment*/", correct: false },
            { text: "//this is a comment //", correct: false },
            { text: "//this is a comment", correct: true }
        ]
    },
    // 10
    {
        thirdQuestion: "How do you round the number 7.25, to the nearest integer?",
        thirdAnswer: [
            { text: "Math.round(7.25)", correct: true},
            { text: "round(7.25)", correct: false},
            { text: "rnd(7.25)", correct: false},
            { text: "math.round(7.25)", correct: false}
        ]
    },
    // 11
    {
        thirdQuestion: "JavaScript is the same as Java.",
        thirdAnswer: [
          
            { text: "false", correct: false },
            { text: "true", correct: true }
        ]
    },
    // 12
    {
        thirdQuestion: "Which event occurs when the user clicks on an HTML element?",
        thirdAnswer: [
            { text: "onmouseclick", correct: false },
            { text: "onclick", correct: true },
            { text: "onmouseover", correct: false },
            { text: "onmouseout", correct: false }
        ]
    },
    // 13
    {
        thirdQuestion: "How do you declare a JavaScript variable?",
        thirdAnswer: [
            { text: "myCar;", correct: false },
            { text: "*variable myCar;", correct: false },
            { text: "var myCar;", correct: true },
            { text: "v myCar;", correct: false }
        ]
    },
    // 14
    {
        thirdQuestion: "Which operator is used to assign a value to a variable?",
        thirdAnswer: [
            { text: "*", correct: false },
            { text: "=", correct: true },
            { text: "/", correct: false },
            { text: "+", correct: false }
        ]
    },
    // 15
    {
        thirdQuestion: "Is JavaScript case-sensitive?",
        thirdAnswer: [
            { text: "false", correct: false },
            { text: "true", correct: true }
        ]
    },
    ]
    
    const thirdQuestionElement = document.getElementById("thirdQue");
    const answerButton = document.getElementById("ansBtnThird");
    const nextButtonQue = document.getElementById("nextBtnBlue");
    
    let thirdCurrentQuestionIndex = 0;
    let thirdScore = 0;
    
    function startThirdQuiz() {
        thirdCurrentQuestionIndex = 0;
        thirdScore = 0;
        nextButtonQue.innerHTML = "Next";
        showQuesAgain();
    }
    
    function showQuesAgain() {
        resetQuizAgain();
        let curQuestionThree = thirdQuestions[thirdCurrentQuestionIndex];
        let questionNumberThree = thirdCurrentQuestionIndex + 1;
        thirdQuestionElement.innerHTML = questionNumberThree + ". " + curQuestionThree.thirdQuestion;
        curQuestionThree.thirdAnswer.forEach(answer => {
            const buttonChangeNew = document.createElement("button");
            buttonChangeNew.innerHTML = answer.text;
            buttonChangeNew.classList.add("btn");
            answerButton.appendChild(buttonChangeNew);
            if (answer.correct) {
                buttonChangeNew.dataset.correct = answer.correct;
            }
            buttonChangeNew.addEventListener("click", selectAnsAgain)
        })
    }
    function resetQuizAgain() {
        nextButtonQue.style.display = "none";
        while (answerButton.firstChild) {
            answerButton.removeChild(answerButton.firstChild);
        }
    }
    function selectAnsAgain(e) {
        const selectBtnAgain = e.target;
        const itsCorrectAgain = selectBtnAgain.dataset.correct === "true";
        if (itsCorrectAgain) {
            selectBtnAgain.classList.add("correct");
            thirdScore++;
        }
        else {
            selectBtnAgain.classList.add("incorrect")
        }
        Array.from(answerButton.children).forEach(buttonsThree => {
            if (buttonsThree.dataset.correct === "true") {
                buttonsThree.classList.add("correct");
            }
            buttonsThree.disabled = "true";
        });
        nextButtonQue.style.display = "block"
    }
    function showQuizScoreAgain() {
        resetQuizAgain();
        thirdQuestionElement.innerHTML = `You Scored ${thirdScore} out of ${thirdQuestions.length} !`;
        nextButtonQue.innerHTML = "Play Again"
        nextButtonQue.style.display = "block"
    }
    function handleNextBtnAgain() {
        thirdCurrentQuestionIndex++;
        if (thirdCurrentQuestionIndex < thirdQuestions.length) {
            showQuesAgain();
        }
        else {
            showQuizScoreAgain();
        }
    }
    nextButtonQue.addEventListener("click", () => {
        if (thirdCurrentQuestionIndex < thirdQuestions.length) {
            handleNextBtnAgain();
        }
        else {
            startThirdQuiz();
        }
    })
    
    startThirdQuiz()
