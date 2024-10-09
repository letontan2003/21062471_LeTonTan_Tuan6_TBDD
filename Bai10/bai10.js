// Initialize variables for score, highscore, and the secret number
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Function to display a message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener for the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('⛔️ No number!');

  // Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  // Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Event listener for the "Again" button
document.querySelector('.again').addEventListener('click', function () {
  // Reset the score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore the initial game state
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Restore original styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
