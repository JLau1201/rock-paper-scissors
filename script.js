function getComputerChoice(){
    const choices = Array('Rock','Paper','Scissors');
    const choice = choices[Math.floor(Math.random()*choices.length)];

    return choice
}

function playerSelection(){
    const input = prompt("Choose a rock paper or scissor");

    return input
}

function playRound(playerSelection, getComputerChoice){
    let ps = playerSelection.toLowerCase();
    let cc = getComputerChoice.toLowerCase();
    ps = ps.charAt(0).toUpperCase() + ps.slice(1);
    cc = cc.charAt(0).toUpperCase() + cc.slice(1);

    const retLose = 'You Lose!'
    const retWin = 'You Win!' 
    const retDraw = 'You Draw!'

    if (ps === 'Rock'){
        if (cc === 'Paper'){
            return retLose
        } else if (cc === 'Scissors'){
            return retWin
        } else{
            return retDraw
        }
    }else if (ps === 'Paper'){
        if (cc === 'Rock'){
            return retWin
        } else if (cc === 'Scissors'){
            return retLose
        } else{
            return retDraw
        }
    }else {
        if (cc === 'Rock'){
            return retLose
        } else if (cc === 'Paper'){
            return retWin
        } else{
            return retDraw
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const roundWinner = playRound(playerSelection(),getComputerChoice())
        if (roundWinner === 'You Win!'){
            console.log('You win this round!')
            playerScore++;
        }else if(roundWinner === 'You Lose!'){
            console.log('You lose this round!')
            computerScore++;
        }else{
            console.log('You drawed this round!')
        }
    }

    if (playerScore > computerScore){
        return 'You Win!'
    }else if (computerScore > playerScore){
        return 'You Lose!'
    }else {
        return 'You Draw!'
    }
}