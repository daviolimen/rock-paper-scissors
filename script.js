const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return possibleChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Enter your choice: (rock, paper, scissors)");
        for (let i = 0; i < 3; i++) {
            if (humanChoice === possibleChoices[i]) return humanChoice;
        }
    }
}

function playGame() {
    let humanScore = computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let humanNum, computerNum;
        for (let i = 0; i < 3; i++) {
            if (humanChoice === possibleChoices[i]) humanNum = i;
            if (computerChoice === possibleChoices[i]) computerNum = i;
        }
    
        if (humanNum === computerNum) {
            console.log("You draw! You both played " + humanChoice + ".");
            return 0;
        } else if (humanNum === ((computerNum + 1) % 3)) {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            return 1;
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            return -1;
        }
    }

    for (let i = 0; i < 5; i++) {
        while (true) {
            let result = playRound(getHumanChoice(), getComputerChoice());
            if (result === 1) {
                humanScore++;
                break;
            } else if (result === -1) {
                computerScore++;
                break;
            }
        }
    }

    console.log("The final result was: ");
    console.log("Human: " + humanScore.toString() + ".");
    console.log("Computer: " + computerScore.toString() + ".");
}

playGame();