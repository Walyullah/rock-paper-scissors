// make a function that returns the computer's choice
// make a function that lets the player input a choice
// make a function that plays a round of rps and returns the score
// make a function for the game and within that make a function that plays 5 rounds

let weapons = [
    "pink slipper", // rock
    "coffee mug", // paper
    "joana" // scissor
  ];
 
let computerChoice = weapons[Math.floor(Math.random()*weapons.length)]; 
console.log(computerChoice);

let playerChoice = prompt("choose yer damn weapon: pink slipper, coffee mug, joana.","pink slipper"); //weapons[Math.floor(Math.random()*weapons.length)]; prompt("choose yer damn weapon: pink slipper, coffee mug, joana.","pink slipper")
console.log(playerChoice);

let playerScore = 0;
let computerScore = 0;

function rpsRound (playerChoice, computerChoice) {
    if      (playerChoice === "pink slipper" && computerChoice === "coffee mug"
            || playerChoice === "coffee mug" && computerChoice === "joana" 
            || playerChoice === "joana" && computerChoice === "pink slipper") {
            
                computerScore++;
                console.log(computerScore);
                return "you lost, nyany nyany boo boo";
    }
    else if (playerChoice === "pink slipper" && computerChoice === "joana"
            || playerChoice === "coffee mug" && computerChoice === "pink slipper" 
            || playerChoice === "joana" && computerChoice === "coffee mug") {
            
                playerScore++;
                console.log(playerScore);
                return "you won! poor joana";
                    
    }
    else if (playerChoice === "pink slipper" && computerChoice === "pink slipper"
            || playerChoice === "coffee mug" && computerChoice === "coffee mug" 
            || playerChoice === "joana" && computerChoice === "joana") {
        
                return "tied";
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
    console.log(rpsRound(playerChoice,computerChoice));
    }
    if (playerScore >= 3) {
        console.log("yaay, you won the game!");
    } else {
        console.log("boo, you lost to a computer!");
    }
}

console.log(game());

