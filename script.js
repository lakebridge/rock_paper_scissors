alert("Script loaded!");
console.log("Hello World");


let playerChoice = prompt("Choose rock, paper, or scissors:");

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

let CC = getComputerChoice();

console.log("You Choice is: " + playerChoice + ", The Computer's choice is:" + CC);