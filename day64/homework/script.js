const choices = ['rock', 'paper', 'scissors'];

document.getElementById("rock").addEventListener('click', function () {
    play("rock");
});

document.getElementById("paper").addEventListener('click', function () {
    play("paper");
});

document.getElementById("scissors").addEventListener('click', function () {
    play("scissors");
});

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("playersChois").textContent = "You chose " + playerChoice;
    document.getElementById("computersChois").textContent = "Computer chose " + computerChoice;

    const result = document.getElementById("result");

    if (playerChoice === computerChoice) {
        result.textContent = "It is a tie";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        result.textContent = "You win";
    }
    else {
        result.textContent = "You lost";
    }
}
