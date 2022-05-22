const gameBoard = (() => {
    var initialPLayer = "X";
    var board = [];
    var gameResults = document.querySelector('#warning');
    var playerDisplay = document.querySelector("#para-display")
    var cells = document.querySelectorAll("#box");
    var boardBoxes = document.getElementById("piece").getElementsByTagName("td");

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]


    function playerMovement() {
        if (initialPLayer === 'X') {
            initialPLayer = "O";
            playerDisplay.innerHTML = "O"
        } else {
            initialPLayer = "X";
            playerDisplay.innerHTML = "X"
        }
    }

    function playGame() {
        if (this.innerHTML == '') {
            this.innerHTML = initialPLayer;
            playerMovement();
            gameLogic()
        }
    }

    var boardBoxes = document.getElementById("piece").getElementsByTagName("td");
    for (var i = 0; i < boardBoxes.length; i++) {
        boardBoxes[i].onclick = playGame;
    }
    document.getElementById("reset").onclick = function() {
        for (var i in boardBoxes) {
            boardBoxes[i].innerHTML = '';
        }
    }

    function gameLogic() {
        if (checkWinX()) {
            gameResults.innerHTML = "Player X wins the game"
        }
        if (checkWinO()) {
            gameResults.innerHTML = "Player O wins the game"
        }
        if (Tie()) {
            gameResults.innerHTML = "Tie!!"
        }
    }
    gameLogic()

    function checkWinX() {
        return winningCombos.some((combination) => {
            return combination.every((i) => {
                return cells[i].innerHTML === "X";
            })
        })
    }

    function checkWinO() {
        return winningCombos.some((combination) => {
            return combination.every((i) => {
                return cells[i].innerHTML === "O";
            })
        })
    }

    function Tie() {
        return cells.forEach((cells) => {
            return cells.innerText === "X" || cells.innerText === "O";
        })
    }


})();