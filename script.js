"use strict";

const questions = [
  {
    question: "Which is the most popular JavaScript framework?",
    options: ["Angular", "React", "Svelte", "Vue"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which company invented React?",
    options: ["Google", "Apple", "Netflix", "Facebook"],
    correctOption: 3,
    points: 10,
  },
];

const container = document.querySelector(".container");
const questionContainer = document.querySelector(".question-container");
const questionAnswers = document.querySelector(".question-answers");

let currentQuestionIndex = 0;
let score = 0;

const submit = document.querySelector(".btn-submit");

async function startQuiz(currentQuestionIndex) {
  const res = await fetch("http://localhost:3300/questions");
  const data = await res.json();

  const question = data[currentQuestionIndex];

  questionContainer.innerHTML = question.question;

  question.options.map((option, i) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.classList.add("question-result");
    li.setAttribute("answerindex", i);

    questionAnswers.insertAdjacentElement("beforeend", li);
  });

  document.querySelectorAll(".question-result").forEach((element) => {
    element.addEventListener("click", function (e) {
      const index = e.target.getAttribute("answerindex");
      if (+index === question.correctOption) {
        score = score + 1;
        currentQuestionIndex = currentQuestionIndex + 1;
        startQuiz(currentQuestionIndex);
      }
    });
  });
}

startQuiz(currentQuestionIndex);
