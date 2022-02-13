let secretNumber = Math.floor(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;

    if (!guess){

        displayMessage('😡No Number!');

    } else if (guess == secretNumber){
        displayMessage('😎Correct Number!');
                score++;
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem';
        
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if (guess !== secretNumber){
        if(score>0){
            displayMessage(guess>secretNumber?'😒Too high':'😢Too low');
             score--;
            document.querySelector('.score').textContent=score;
        } else {
            displayMessage('😈Time to feel the pain, you have lost the game!');
            document.querySelector('body').style.backgroundColor = 'red'
        }
  
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
  
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });