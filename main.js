/* const questions = [
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
] */
const questions = [
       {
           question: "What is the capital of France?",
           answers: [
               { text: "New York", correct: false },
               { text: "London", correct: false },
               { text: "Paris", correct: true },
               { text: "Dublin", correct: false }
           ]
       },
       {
           question: "What is the capital of Spain?",
           answers: [
               { text: "New York", correct: false },
               { text: "London", correct: false },
               { text: "Madrid", correct: true },
               { text: "Dublin", correct: false }
           ]
       },
       {
           question: "What is the largest mammal in the world?",
           answers: [
               { text: "Elephant", correct: false },
               { text: "Blue Whale", correct: true },
               { text: "Giraffe", correct: false },
               { text: "Hippopotamus", correct: false }
           ]
       },
       {
           question: "Which planet is known as the Red Planet?",
           answers: [
               { text: "Venus", correct: false },
               { text: "Mars", correct: true },
               { text: "Jupiter", correct: false },
               { text: "Saturn", correct: false }
           ]
       },
       {
           question: "What is the chemical symbol for gold?",
           answers: [
               { text: "Au", correct: true },
               { text: "Ag", correct: false },
               { text: "Fe", correct: false },
               { text: "Cu", correct: false }
           ]
       },
       {
           question: "Who painted the Mona Lisa?",
           answers: [
               { text: "Vincent van Gogh", correct: false },
               { text: "Pablo Picasso", correct: false },
               { text: "Leonardo da Vinci", correct: true },
               { text: "Michelangelo", correct: false }
           ]
       },
       {
              question: "What is the capital of Germany?",
              answers: [
                  { text: "Munich", correct: false },
                  { text: "Berlin", correct: true },
                  { text: "Hamburg", correct: false },
                  { text: "Leipzig", correct: false }
              ]
          },
       {
           question: "What is the largest organ in the human body?",
           answers: [
               { text: "Heart", correct: false },
               { text: "Brain", correct: false },
               { text: "Skin", correct: true },
               { text: "Liver", correct: false }
           ]
       },
       {
           question: "What is the speed of light?",
           answers: [
               { text: "299,792 kilometers per second", correct: true },
               { text: "150,000 kilometers per second", correct: false },
               { text: "200,000 kilometers per second", correct: false },
               { text: "250,000 kilometers per second", correct: false }
           ]
       },
       {
           question: "Who wrote 'Romeo and Juliet'?",
           answers: [
               { text: "William Shakespeare", correct: true },
               { text: "Jane Austen", correct: false },
               { text: "Charles Dickens", correct: false },
               { text: "Mark Twain", correct: false }
           ]
       },{
              question: "What is the capital of Lebanon?",
              answers: [
                  { text: "Beirut", correct: true },
                  { text: "Tripoli", correct: false },
                  { text: "Jbeil", correct: false },
                  { text: "Jounyeh", correct: false }
              ]
          },
       {
           question: "Which country is the largest by land area?",
           answers: [
               { text: "China", correct: false },
               { text: "United States", correct: false },
               { text: "Canada", correct: true },
               { text: "Russia", correct: false }
           ]
       },
       {
           question: "What is the tallest mountain in the world?",
           answers: [
               { text: "K2", correct: false },
               { text: "Mount Kilimanjaro", correct: false },
               { text: "Mount Everest", correct: true },
               { text: "Denali", correct: false }
           ]
       },       {
              question: "What is the capital of United Kingdom?",
              answers: [
                  { text: "New York", correct: false },
                  { text: "London", correct: true },
                  { text: "Paris", correct: false },
                  { text: "Dublin", correct: false }
              ]
          },
       {
           question: "What is the chemical symbol for water?",
           answers: [
               { text: "H2O", correct: true },
               { text: "CO2", correct: false },
               { text: "O2", correct: false },
               { text: "NaCl", correct: false }
           ]
       }
   ];
   

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

/* const questions = [
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
 */