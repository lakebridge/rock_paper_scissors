// alert("Script loaded!");
// console.log("Hello World");

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

let pChoice = "";
let result = "";

function processGame(CC, playerChoice) {
        pChoice = playerChoice;
        if (CC == "scissors") {
            switch (playerChoice) {
            case "scissors":
            // console.log("it's a Tie!");
            result = "it's a Tie!"
            break;

            case "rock":
            result = "Congrats! You win";
            // console.log("Congrats! You win");
            // humanScore++;
            break;

            case "paper":
            result = "The Computer wins! Sorry";
            // console.log("the Computer wins! Sorry");
            // computerScore++;
            break;

            default:
            console.log("you need to correct you play please!")
            }
    }       else if (CC == "rock") {
            switch (playerChoice) {
            case "rock":
            result = "it's a Tie!"
            // console.log("it's a Tie!")
            break;

            case "paper":
            result = "Congrats! You win";
            // console.log("Congrats! You win");
            // humanScore++;
            break;

            case "scissors":
            result = "the Computer wins! Sorry";
            console.log("The Computer wins! Sorry")
            // computerScore++;
            break;

            default:
            console.log("you need to correct you play please!")
            }

    }       else {
            switch (playerChoice) {
            case "paper":
            result = "it's a Tie!"
            // console.log("it's a Tie!")
            break;

            case "scissors":
            result = "Congrats! You win";
            // console.log("Congrats! You win");
            // humanScore++;
            break;

            case "rock":
            result = "The Computer wins! Sorry";            // console.log("the Computer wins! Sorry")
            // computerScore++;
            break;

        default:
        console.log("you need to correct you play please!")
        
    }
    
    }
      
    // console.log ("Your New Score is = " + humanScore + ", and the Computer's Score is = " + computerScore)
}



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let CC = ""
let numberGames = 0;

function displayResult() {
        const div = document.createElement("diu");
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");

        h2.textContent = `Game N° ${numberGames}`
        p1.textContent = `You Choice is: ${pChoice}, The Computer's choice is: ${CC}.`;
        p2.textContent = result;

        p1.style.backgroundColor = "lightblue"

        document.body.appendChild(div);
        div.append (h2);
        div.appendChild (p1);
        div.appendChild (p2);
}



rock.addEventListener("click", () => {
    CC = getComputerChoice();
    processGame(CC, "rock");
    numberGames++;
    displayResult();
    // console.log("You Choice is: rock, The Computer's choice is:" + CC);
}
);

paper.addEventListener("click", () => {
    CC = getComputerChoice();
    processGame(CC, "paper");
    numberGames++;
    displayResult();
    // console.log("You Choice is: paper, The Computer's choice is:" + CC);
}
);

scissors.addEventListener("click", () => {
    CC = getComputerChoice();
    processGame(CC, "scissors");
    numberGames++;
    displayResult();
    // console.log("You Choice is: scissors, The Computer's choice is:" + CC);
}
);



// Five Games Logic
// let humanScore = 0;
// let computerScore = 0;
// for (let i = 0; i < 5; i++) {
//   console.log("Round:", i);
//   let CC = getComputerChoice();
//   let playerChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
//   console.log("You Choice is: " + playerChoice + ", The Computer's choice is:" + CC);
//   processGame(CC, playerChoice);
// }
