const quizDB = [{

    question: "1) HTML stands for -",

    a: "HighText Machine Language",
    b: "HyperText and links Markup Language",
    c: "HyperText Markup Language",
    d: "None of these",
    ans: "ans2"
},
{
    question: "2) The correct sequence of HTML tags for starting a webpage is -",

    a: "Head, Title, HTML, body",
    b: "HTML, Body, Title, Head",
    c: "HTML, Head, Title, Head",
    d: "HTML, Head, Title, Body",
    ans: "ans4"
},
{
    question: "3) The property in CSS used to change the background color of an element is -",

    a: "bgcolor",
    b: "color",
    c: "background-color",
    d: "All of the above",
    ans: "ans3"
},
{
    question: "4) Which of the following is not a value of the font-variant property in CSS?",

    a: "normal",
    b: "small-caps",
    c: "large-caps",
    d: "inherit",
    ans: "ans3"
},
{
    question: "5) The CSS property used to control the element's font-size is -",

    a: "text-style",
    b: "text-size",
    c: "font-size",
    d: "None of the above",
    ans: "ans3"
},
{
    question: "6) The CSS property used to specify the transparency of an element is -",

    a: "opacity",
    b: "filter",
    c: "visibility",
    d: "overlay",
    ans: "ans1"
},
{

    question: "7) Which of the following CSS property is used to represent the overflowed text which is not visible to the user?",

    a: "text-shadow",
    b: "text-stroke",
    c: "text-overflow",
    d: "text-decoration",
    ans: "ans3"
},
{
    question: " 8) Which of the following CSS property is used to specify the type of quotation mark?",

    a: "quotes property",
    b: "z-index property",
    c: "hyphens property",
    d: "None of the above",
    ans: "ans1"
},
{
    question: " 9) The tags in HTML are -",

    a: "case-sensitive",
    b: "in upper case",
    c: "not case sensitive",
    d: "in lowercase",
    ans: "ans3"
},
{
    question: "10) Which of the following CSS property is used to add shadows to the text?",

    a: "text-shadow",
    b: "text-stroke",
    c: "text-overflow",
    d: "text-decoration",
    ans: "ans1"
}
];


const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

document.getElementById('btn1').addEventListener("click", function (event) {
    event.preventDefault();
    toggleVisibility();
})
function toggleVisibility() {

    var y = document.getElementById("login-page");
    var x = document.getElementById("ques");
    if (x.style.display == "none") {
        x.style.display = "block";
        y.style.display = "none";
        showScore.style.display = "none";




        const startingMinutes = 5;
        let time = startingMinutes * 60;
        const countdownEl = document.getElementById('sec');
        var interval = setInterval(updateCountdown, 1000);
        function updateCountdown() {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            seconds = seconds < 5 ? '0' + seconds : seconds;

            countdownEl.innerHTML = `${minutes}:${seconds}`;
            time--

            if (time == 0) {
                clearInterval(interval);

                alert("your time is over");


                ques.style.display = "none";
                showScore.style.display = "block";
                showScore.innerHTML = `
               <img src="crown.png">
        
               <h3> You Scored ${score} Out of ${quizDB.length} </h3>
               <button class ="btn" onclick ="location.reload()"> Exit</button>
               `;
                showScore.classList.remove('scoreArea');

            }
        }


    }
    else {
        x.style.display = "none";
    }

}





let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestion();


const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnswer) => {
        if (curAnswer.checked) {
            answer = curAnswer.id;
        }

    });
    return answer;
};
const deselectAll = () => {
    answers.forEach((curAnswer) => curAnswer.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);


    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    };

    deselectAll();
    questionCount++;

    if (questionCount < quizDB.length) {
        loadQuestion();
        //    showScore.style.display ="none";

    } else {

        ques.style.display = "none";
        showScore.style.display = "block";
        showScore.innerHTML = `
              

               <h1> You Scored ${score} Out of ${quizDB.length} <i class="fas fa-trophy"></i> </h1>
               <button class ="btn" onclick ="location.reload()"> Exit</button>
               `;
        showScore.classList.remove('scoreArea');

    }

});