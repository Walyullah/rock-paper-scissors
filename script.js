// make a button for each choice
// add an eventListener that runs the playRound function
// edit playRound so playerCHoice is based on button click
// make a div for results

const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');
const button3 = document.querySelector('.three');
const div = document.querySelector('div');
const btn = document.querySelectorAll('button');
const scores = document.querySelector('.result');

let playerChoice = ''; 
let playerScore = 0;
let computerScore = 0;
let callCount = 0;

button1.addEventListener('click', (e) => playerChoice = e.target.innerText);
button2.addEventListener('click', (e) => playerChoice = e.target.innerText);
button3.addEventListener('click', (e) => playerChoice = e.target.innerText);

btn.forEach(button => {
    button.addEventListener('click', function (e) {
        playRound(); 
        callCountIncrease();
        if (callCount == 5) {
            if (playerScore > computerScore) {
                scores.textContent += " yaay, you won the game!";
            } else if (playerScore < computerScore) {
                scores.textContent += " pfft, you lost to slamBot;)";
            } else if (playerScore === computerScore) {
                scores.textContent += " huh, it's a tie, bummer.";
            }
            callCount = 0;
        }
    });
});

function callCountIncrease () {
    callCount += 1;
    console.log(`rounds played: ${callCount}`);
}

function playRound (e) {

    let weapons = [
        "pink slipper", // rock
        "coffee mug", // paper
        "joana" // scissor
      ];
     
    let computerChoice = weapons[Math.floor(Math.random()*weapons.length)]; 
    console.log(`slamBot: ${computerChoice}`);
    console.log(`slamBert: ${playerChoice}`);

    if      (playerChoice === "pink slipper" && computerChoice === "coffee mug"
            || playerChoice === "coffee mug" && computerChoice === "joana" 
            || playerChoice === "joana" && computerChoice === "pink slipper") {
            
                computerScore++;
                console.log(`slamBot has ${computerScore} points`);
                console.log(`slamBert has ${playerScore} points`);
                scores.textContent = `slamBot has ${computerScore} points. slamBert has ${playerScore} points. you lost, nyany nyany boo boo.`;
    }
    else if (playerChoice === "pink slipper" && computerChoice === "joana"
            || playerChoice === "coffee mug" && computerChoice === "pink slipper" 
            || playerChoice === "joana" && computerChoice === "coffee mug") {
            
                playerScore++;
                console.log(`slamBot has ${computerScore} points`);
                console.log(`slamBert has ${playerScore} points`);
                scores.textContent = `slamBot has ${computerScore} points. slamBert has ${playerScore} points. you won! poor joana.`;
                    
    }
    else if (playerChoice === "pink slipper" && computerChoice === "pink slipper"
            || playerChoice === "coffee mug" && computerChoice === "coffee mug" 
            || playerChoice === "joana" && computerChoice === "joana") {
        
                console.log(`slamBot has ${computerScore} points`);
                console.log(`slamBert has ${playerScore} points`);
                scores.textContent = `slamBot has ${computerScore} points. slamBert has ${playerScore} points. tied score.`;
    }
}

