

var buttonScissors, buttonRock, buttonPaper;

// buttonTest = document.getElementById('button-test');
// buttonTest.addEventListener('click', function () { buttonClicked('Guzik TEST'); });
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () { buttonClicked('Kamien'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () { buttonClicked('Papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () { buttonClicked('Nożyce'); });

function buttonClicked(argButtonName) {
    clearMessages();
    // console.log(argButtonName + ' został kliknięty");

    var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

    /**
     * Describe this function...
     */
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'Kamień';
        } else if (argMoveId == 2) {
            return 'Papier';
        } else if (argMoveId == 3) {
            return 'Nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'Kamień';
        }
    }

    /**
     * Describe this function...
     */
    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'Papier' && argComputerMove == 'Kamień') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'Nożyce' && argComputerMove == 'Papier') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Remis!');
        } else if (argPlayerMove == 'Kamien' && argComputerMove == 'Nożyce') {
            printMessage('Wygrywasz!');
        } else {
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    // playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    // console.log('wybór ruchu gracza to: ' + playerInput);
    // playerMove = getMoveName(playerInput);
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}