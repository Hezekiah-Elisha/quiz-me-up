const quizData = [
  {
    question: "What is the most used language in 2021?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the president of Kenya?",
    a: "Ruto",
    b: "Uhuru",
    c: "Hezekiah",
    d: "Samoei",
    correct: "b",
  },
  {
    question: "How many colors does the kenyan flag have?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Hyper Text Make up Langauge",
    c: "Python",
    d: "JavaScript",
    correct: "a",
  },
];
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btnSubmit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked){
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers(){
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

btnSubmit.addEventListener("click", () => {
  // check to see the answers
  let answersGiven = getSelected();

  if (answersGiven){
    if (answersGiven === quizData[currentQuiz].correct){
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    }else{
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} correctly.</h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
