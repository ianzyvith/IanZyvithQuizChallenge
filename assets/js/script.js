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
  var time = 60;
  var timer;



  // starts the quiz when text is clicked
  function startQuiz() {
    timer = setInterval(timerStart, 1000);
    timerEl.textContent = "Time: " + time;


    renderQuestion();
  }
    
  
  
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

    optionListEl.innerHTML = "";
    nextQuestion();
  }
  


  // brings up next question
  function nextQuestion() {
    questionIndex++;

    // when all question are asked end quiz
    if (questionIndex === questions.length) {
        clearInterval(timer);
        endGame();
    }

    else {
        renderQuestion();
    }
  }

  // timer function
  function timerStart() {
      time--;
      timerEl.textContent = "Time: " + time;

      if (time <= 0) {
        timerEl.textContent = "0";
        endGame();
      }
  }

  // end of game function
  function endGame() {

    optionListEl.innerHTML = "";

    questionEl.innerHTML = "Thank you for taking the quiz!";
        
    var finalScore = document.createElement("p");
    finalScore.textContent = "Your final score is " + correctCount + "!";
    questionEl.appendChild(finalScore);

  }



  // calls to start
  startBtn.addEventListener("click", startQuiz);
  startBtn.textContent = "Press to Start Quiz";