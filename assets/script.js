var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');


function countdown() {
  var timeLeft = 100;

  
  var timeInterval = setInterval(function() {
    
    if (timeLeft > 1) {
     
      timerEl.textContent = timeLeft + ' seconds remaining';
      
      timeLeft--;
    } else if (timeLeft === 1) {
     
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      
      timerEl.textContent = '';
     r
      clearInterval(timeInterval);
     
      displayMessage();
    }
  }, 1000);
}


startBtn.onclick = countdown;
