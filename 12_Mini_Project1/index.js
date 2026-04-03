const quizDB = [
    {
        question: "1. What is the capital of India ?",
        a: "Chandigarh",
        b: "Delhi",
        c: "Moga",
        d: "Mumbai",
        answer: "ans2"
    },

    {
        question: "2. What is the capital of Punjab ?",
        a: "Patiala",
        b: "Moga",
        c: "Amritsar",
        d: "Chandigarh",
        answer: "ans4"
    },

    {
        question: "3. What is the capital of Maharashtara ?",
        a: "Pune",
        b: "Mumbai",
        c: "Jandiala",
        d: "Varanasi",
        answer: "ans2"
    },

    {
        question: "4. What is the capital of Madhya Pradesh ?",
        a: "Lucknow",
        b: "Delhi",
        c: "Bhopal",
        d: "Indore",
        answer: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    
    // console.log(questionList); // {question: 'What is the capital of India ?', a: 'Chandigarh', b: 'Delhi', c: 'Moga', d: 'Mumbai', …}
    question.innerText = questionList.question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}


loadQuestion();


const getCheckAnswer = () => {
    let answer;
    answers.forEach((element) => {
        if(element.checked){
            answer = element.id;
        }
    });
    return answer; 
};

const deselectAll = () => {
    answers.forEach((element) => element.checked = false);
}

submit.addEventListener('click' ,() => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if(checkAnswer === quizDB[questionCount].answer){
        score++;
    };
    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3> Your Scored: ${score}/${quizDB.length} 👍</h3>
            <button class="btn" onclick= "location.reload()" >Play Again</button>

        `;

        showScore.classList.remove('scoreArea'); 
    }
});

