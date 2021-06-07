
 var quizContainer = document.getElementById('quiz');
 var resultsContainer = document.getElementById('results');
 var submitButton = document.getElementById('submit');
 var myQuestions = [
   {
     question: "Who invented JavaScript?",
     answers: {
       a: "Douglas Crockford",
       b: "Sheryl Sandberg",
       c: "Brendan Eich"
     },
     correctAnswer: "c"
   },
   {
     question: "Who is the creator of CSS?",
     answers: {
       a: "Tim Verners",
       b: "John Smith",
       c: "Håkon Wium"
     },
     correctAnswer: "c"
   },
   {
     question: "What does HTML stand for?",
     answers: {
       a: "Hyper Text Markup Level",
       b: "Hyper Text Monitoring Language",
       c: "Hyper Text Marketing Language",
       d: "Hyper Text Markup Lanuage"
     },
     correctAnswer: "d"
   }
 ];

(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
    
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  

      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  

        var answerContainers = quizContainer.querySelectorAll('.answers');
  

      let numCorrect = 0;
  
      
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
    
        if(userAnswer === currentQuestion.correctAnswer){
        
          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
   
  
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  