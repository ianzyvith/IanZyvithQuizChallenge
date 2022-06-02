// starter code for this challenge was provided by our teacher, Kevin Ferguson
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      question:
        "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
  ];
  
  var startBtn = document.querySelector("#start-quiz");
  var questionEl = document.querySelector("#question");
  var optionListEl = document.querySelector("#option-list");
  var questionResultEl = document.querySelector("#question-result");
  var timerEl = document.querySelector("#timer");
  
  var questionIndex = 0;
  var correctCount = 0;
  
  // generates questions
  function renderQuestion() {
    startBtn.textContent = "";

    questionEl.textContent = questions[questionIndex].question;
    
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        var questionChoiceList = document.createElement("li");
        questionChoiceList.textContent = questions[questionIndex].choices[i];
        optionListEl.appendChild(questionChoiceList);
    }

    optionListEl.addEventListener("click", checkAnswer);
  }

  // checks answer from question
  function checkAnswer(event) {

    if (event.target.textContent === questions[questionIndex].answer) {
        correctCount++;
        questionResultEl.textContent = "That is Correct!";
    }

    else {
        // subtract time from timer

        questionResultEl.textContent = "That is Incorrect. You have lost 5 seconds.";
    }

    nextQuestion();
  }
  
  // brings up next question
  function nextQuestion() {
    questionIndex++;
    // when all question are asked end quiz
    renderQuestion();
  }

  // starts the quiz when text is clicked
  function startQuiz() {
    startBtn.textContent = "Press to Start Quiz";
  }

  startQuiz();
  startBtn.addEventListener("click", renderQuestion);