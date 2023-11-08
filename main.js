const questions = [
       {
              question: "What is the capital of France?",
              answers: [
              { text: "New York", correct: false },
              { text: "London", correct: false },
              { text: "Paris", correct: true },
              { text: "Dublin", correct: false }
              ]
       },{
              question: "What is the capital of Lebanon?",
              answers: [
              { text: "Beirut", correct: true },
              { text: "Tripoli", correct: false },
              { text: "Jbeil", correct: false },
              { text: "Jounyeh", correct: false }
              ]
       },{
              question: "What is the capital of Germany?",
              answers: [
              { text: "Munich", correct: false },
              { text: "Berlin", correct: true },
              { text: "Hamburg", correct: false },
              { text: "Leipzig", correct: false }
              ]
       },{
              question: "What is the capital of United Kindgom?",
              answers: [
              { text: "New York", correct: false },
              { text: "London", correct: true },
              { text: "Paris", correct: false },
              { text: "Dublin", correct: false }
              ]
       },{
              question: "What is the capital of Spain?",
              answers: [
              { text: "New York", correct: false },
              { text: "London", correct: false },
              { text: "Madrid", correct: true },
              { text: "Dublin", correct: false }
              ]
       }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answear-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
       currentQuestionIndex=0;
       score=0;
       nextButton.innerHTML = "Next";
       showQuestion();
}

function showQuestion(){
       resetState();
       let currentQuestion = questions[currentQuestionIndex];
       let questionNo = currentQuestionIndex + 1;
       questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

       currentQuestion.answers.forEach(answer => {
              const button = document.createElement("button");
              button.innerHTML = answer.text;
              button.classList.add("btn");
              answerButtons.appendChild(button);
              if(answer.correct){
                     button.dataset.correct = answer.correct;
              }
              button.addEventListener("click", selectAnswer);
       })
}
function resetState(){
       nextButton.style.display="none";
       while(answerButtons.firstChild){
              answerButtons.removeChild(answerButtons.firstChild);
       }
}
function selectAnswer(e){
       const selectedBtn = e.target;
       const isCorrect = selectedBtn.dataset.correct === "true";
       if(isCorrect){
              selectedBtn.classList.add("correct");
              score++;
       }else{
              selectedBtn.classList.add("incorrect");
       }
       Array.from(answerButtons.children).forEach(button=>{
              if(button.dataset.correct === "true"){
                     button.classList.add("correct");
              }
              button.disabled = true;
       });
       nextButton.style.display = "block";
}
function showScore(){
       resetState();
       questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`
       nextButton.innerHTML = "Play Again";
       nextButton.style.display = "block";
}
function handleNextButton(){
       currentQuestionIndex++;
       if(currentQuestionIndex < questions.length){
              showQuestion();
       }else{
              showScore();
       }
}
nextButton.addEventListener(("click"),()=>{
       if(currentQuestionIndex < questions.length){
              handleNextButton();
       }else{
              startQuiz();
       }
})
startQuiz();
