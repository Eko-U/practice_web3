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
const questionAsnwer = document.querySelector(".question-answer");

let currentQuestion = 0;
let score = 0;
let timer;
let timePerQuestion = 30;
let cur_question = questions[currentQuestion];

const submit = document.querySelector(".btn-submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuestion++;
  cur_question = questions[currentQuestion];
});

console.log(cur_question);

const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Shakespeare", correct: true },
      { text: "Tolstoy", correct: false },
      { text: "Hemingway", correct: false },
      { text: "Austen", correct: false },
    ],
  },
]