📄 Project Description 
Project Name: Rock-Paper-Scissors

Description:
Rock-Paper-Scissors is a browser-based Rock-Paper-Scissors game built with HTML, CSS, and vanilla JavaScript. It allows the user to play against the computer in a simple yet engaging interface.

The player selects one of the three options — Rock, Paper, or Scissors — and the computer makes a random choice. The game then displays the result (Win/Lose/Draw) and updates the score accordingly.

🧩 Features:
🎮 Interactive buttons for Rock, Paper, and Scissors

🤖 Computer randomly chooses its move

⚔️ Game logic to determine round outcome

📊 Live score tracking (Player vs. Computer)

🔄 Option to reset the score/game

✨ Simple and responsive UI using HTML & CSS

🧠 No frameworks — written in pure JavaScript

⚙️ Technology Used:
Technology	Purpose
HTML5	Structure of the game (buttons, score area, etc.)
CSS3	Styling, layout, and basic animations
JavaScript (ES6)	Game logic, DOM manipulation, interactivity

🧠 Game Logic Overview (Sample):
javascript
Copy
Edit
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
  if (player === computer) return "Draw";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) return "You Win!";
  return "Computer Wins!";
}
