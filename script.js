const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return possibleChoices[Math.floor(Math.random() * 3)];
}

let humanScore = computerScore = 0;

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

function playRound(humanChoice, computerChoice) {
    let humanNum, computerNum;
    for (let i = 0; i < 3; i++) {
        if (humanChoice === possibleChoices[i]) humanNum = i;
        if (computerChoice === possibleChoices[i]) computerNum = i;
    }

    const para = document.querySelector("p");

    if (humanNum === computerNum) {
        para.textContent = "Last round result: You draw! You both played " + humanChoice + ".";
    } else if (humanNum === ((computerNum + 1) % 3)) {
        para.textContent = "Last round result: You win! " + humanChoice + " beats " + computerChoice + ".";
        humanScore++;
    } else {
        para.textContent = "Last round result: You lose! " + computerChoice + " beats " + humanChoice + ".";
        computerScore++;
    }

    const score = document.querySelector("h1");
    score.textContent = "Score: " + humanScore.toString() + " x " + computerScore.toString();

    if (humanScore === 5 || computerScore === 5) {
        rockButton.remove();
        paperButton.remove();
        scissorsButton.remove();
    }

    if (humanScore === 5) {
        let victoryHeader = document.createElement("h1");
        victoryHeader.textContent = "YOU WON!!";
        document.querySelector("body").appendChild(victoryHeader);
    } else if (computerScore === 5) {
        let defeatHeader = document.createElement("h1");
        defeatHeader.textContent = "You lost...";
        document.querySelector("body").appendChild(defeatHeader);
    }
}

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});