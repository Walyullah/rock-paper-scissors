// make a function that returns the computer's choice
// make a function that lets the player input a choice
// make a function that plays a round of rps and returns the score
// make a function for the game and within that make a function that plays 5 rounds





function game () {
    
    let playerScore = 0;
    let computerScore = 0;

    function rpsRound (a, b) {

        let weapons = [
            "pink slipper", // rock
            "coffee mug", // paper
            "joana" // scissor
          ];
         
        let computerChoice = weapons[Math.floor(Math.random()*weapons.length)]; 
        console.log(`slamBot: ${computerChoice}`);
        
        let playerChoice = prompt("choose yer damn weapon: pink slipper, coffee mug, joana.","pink slipper"); //weapons[Math.floor(Math.random()*weapons.length)]; prompt("choose yer damn weapon: pink slipper, coffee mug, joana.","pink slipper")
        console.log(`slamBert: ${playerChoice}`);

        if      (playerChoice === "pink slipper" && computerChoice === "coffee mug"
                || playerChoice === "coffee mug" && computerChoice === "joana" 
                || playerChoice === "joana" && computerChoice === "pink slipper") {
                
                    computerScore++;
                    console.log(`slamBot has ${computerScore} points`);
                    console.log(`slamBert has ${playerScore} points`);
                    return "you lost, nyany nyany boo boo";
        }
        else if (playerChoice === "pink slipper" && computerChoice === "joana"
                || playerChoice === "coffee mug" && computerChoice === "pink slipper" 
                || playerChoice === "joana" && computerChoice === "coffee mug") {
                
                    playerScore++;
                    console.log(`slamBot has ${computerScore} points`);
                    console.log(`slamBert has ${playerScore} points`);
                    return "you won! poor joana";
                        
        }
        else if (playerChoice === "pink slipper" && computerChoice === "pink slipper"
                || playerChoice === "coffee mug" && computerChoice === "coffee mug" 
                || playerChoice === "joana" && computerChoice === "joana") {
            
                    console.log(`slamBot has ${computerScore} points`);
                    console.log(`slamBert has ${playerScore} points`);
                    return "tied";
        }
    }

    for (let i = 0; i < 5; i++) {
    console.log(rpsRound());
    }
    if (playerScore > computerScore) {
        console.log("yaay, you won the game!");
    } else if (playerScore < computerScore) {
        console.log("pfft, you lost to slamBot;)");
    } else if (playerScore === computerScore) {
        console.log("huh, it's a tie");
    }
}

console.log(game());

