const moves = ['piedra', 'papel', 'tijera'];
const computerPlay = () => {
    return moves[Math.floor(Math.random() * 3)]
};
const round = () => {
    let playerSelection = prompt('¿Piedra, papel o tijera, que elegis?').toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return(null)
    } else if (playerSelection === 'piedra' && computerSelection === 'tijera') {
        return(true)
    } else if (playerSelection === 'papel' && computerSelection === 'tijera') {
        return(false)
    } else if (playerSelection === 'papel' && computerSelection === 'piedra') {
        return(true)
    } else if (playerSelection === 'tijera' && computerSelection === 'rock') {
        return(false)
    } else if (playerSelection === 'tijera' && computerSelection === 'papel') {
        return(true)
    } else if (playerSelection === 'piedra' && computerSelection === 'papel') {
        return(false)
    }
}

let playerWins = 0
let computerWins = 0
const game = () => {
    let result = round();
        if (result === true) {
            playerWins += 1;
            console.log('¡Ganaste! ¡Vamos de nuevo!')
        } else if (result === false) {
            computerWins += 1;
            console.log('¡Perdiste! ¡Vamos de nuevo!')
        } else if (result === null) {
            console.log('¡Empate! ¡Vamos de nuevo!')
        }
    console.log(`Victorias: ${playerWins}; Derrotas: ${computerWins}`)
}

do {
    game()
} while (playerWins < 5 && computerWins < 5)

if (playerWins === 5) {
    alert('¡Victoria!')
} else if (computerWins === 5) {
    alert('¡Derrota!')
}

