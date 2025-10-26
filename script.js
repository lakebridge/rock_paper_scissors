alert("Script loaded!");
console.log("Hello World");

function getComputerChoice() {
    a = Math.random()
    if (a < 1/3) {
        return "paper";
    } else if (a <2/3 && a>=1/3) {
        return "rock";
    } else {
        return "scissors";
    }
}

function processGame(CC, playerChoice) {
      if (CC == "scissors") {
        switch (playerChoice) {
        case "scissors":
        console.log("it's a Tie!")
        break;

        case "rock":
        console.log("Congrats! You win");
        humanScore++;
        break;

        case "paper":
        console.log("the Computer wins! Sorry")
        computerScore++;
        break;

        default:
        console.log("you need to correct you play please!")
        }
    } else if (CC == "rock") {
        switch (playerChoice) {
        case "rock":
        console.log("it's a Tie!")
        break;

        case "paper":
        console.log("Congrats! You win");
        humanScore++;
        break;

        case "scissors":
        console.log("the Computer wins! Sorry")
        computerScore++;
        break;

        default:
        console.log("you need to correct you play please!")
        }

    } else {
        switch (playerChoice) {
        case "paper":
        console.log("it's a Tie!")
        break;

        case "scissors":
        console.log("Congrats! You win");
        humanScore++;
        break;

        case "rock":
        console.log("the Computer wins! Sorry")
        computerScore++;
        break;

        default:
        console.log("you need to correct you play please!")
        }
    
    }
      
    console.log ("Your New Score is = " + humanScore + ", and the Computer's Score is = " + computerScore)
}

let humanScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {
  console.log("Round:", i);
  let CC = getComputerChoice();
  let playerChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
  console.log("You Choice is: " + playerChoice + ", The Computer's choice is:" + CC);
  processGame(CC, playerChoice);
}


