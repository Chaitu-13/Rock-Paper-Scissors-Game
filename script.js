let userScore = 0;
let computerScore = 0;

function playGame(userChoice){

    const choices = ["Rock","Paper","Scissors"];
    const choices
    

    const computerChoice =
    choices[Math.floor(Math.random()*3)];

    document.getElementById("userChoice")
    .innerText = "Your Choice: " + userChoice;

    document.getElementById("computerChoice")
    .innerText = "Computer Choice: " + computerChoice;

    let result = "";

    if(userChoice === computerChoice){

        result = "Draw";

    } else if(
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ){

        result = "You Win!";
        userScore++;

    } else {

        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("result")
    .innerText = result;

    document.getElementById("userScore")
    .innerText = userScore;

    document.getElementById("computerScore")
    .innerText = computerScore;
}

function resetGame(){

    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").innerText = 0;
    document.getElementById("computerScore").innerText = 0;

    document.getElementById("userChoice").innerText =
    "Your Choice:";

    document.getElementById("computerChoice").innerText =
    "Computer Choice:";

    document.getElementById("result").innerText =
    "Result";
}
