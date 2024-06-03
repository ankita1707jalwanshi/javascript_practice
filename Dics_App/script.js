// script.js
function rollDice() {
    // Generate random numbers between 1 and 6 for each dice
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const dice3 = Math.floor(Math.random() * 6) + 1;

    // Display the results on the webpage
    document.getElementById('dice1').innerText = dice1;
    document.getElementById('dice2').innerText = dice2;
    document.getElementById('dice3').innerText = dice3;

    // Determine the winner
    const rolls = { 'Team Member 1': dice1, 'Team Member 2': dice2, 'Team Member 3': dice3 };
    const winner = Object.keys(rolls).reduce((a, b) => rolls[a] > rolls[b] ? a : b);

    // Display the winner
    document.getElementById('result').innerText = `The winner is: ${winner} with a roll of ${rolls[winner]}`;
}
