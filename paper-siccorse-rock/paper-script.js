const game = () => {
    let pScore = 0;
    let cScore = 0;

    document.querySelector("#intro button").addEventListener("click", () =>{
        document.getElementById("intro").style.height = "0";
        setTimeout(() => {document.getElementById("match").style.height = "290px";}, 2000);
    });

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                compareHands(this.textContent, computerChoice);
                playerHand.src = `../images/${this.textContent}.png`;
                computerHand.src = `../images/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore.toString();
        computerScore.textContent = cScore.toString();
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }

        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
            }
        }

        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
            }
        }

        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
            }
        }
    };

    playMatch();
};

game();
