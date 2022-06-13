const gameBoard = (() => {
    let initialPLayer = "X";
    let board = [];
    const playerDisplay = document.querySelector("#para-display");
    const gameResults = document.querySelector('#warning');
    const cells = [...document.querySelectorAll("#box")];
    const playerLeft = document.getElementById("player1");
    const playerRight = document.getElementById("player2");
    const playerPrompt1 = prompt("Please enter player name!");
    const playerPrompt2 = prompt("Please enter player name!");

    function refreshPage() {
        window.location.reload();
    }

    function displayPlayers() {
        playerLeft.innerHTML = playerPrompt1 + " (X) ";

        playerRight.innerHTML = playerPrompt2 + " (O) ";
    }
    displayPlayers();

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
            playerDisplay.innerHTML = playerPrompt2
        } else {
            initialPLayer = "X";
            playerDisplay.innerHTML = playerPrompt1
        }
    }

    function playGame() {
        if (this.innerHTML == '') {
            this.innerHTML = initialPLayer;
            playerMovement();
            gameLogic()
        }
    }

    function newGame() {
        var boardBoxes = document.getElementById("piece").getElementsByTagName("td");
        for (var i = 0; i < boardBoxes.length; i++) {
            boardBoxes[i].onclick = playGame;
        }
        document.getElementById("reset").onclick = function() {
            for (var i in boardBoxes) {
                refreshPage()

            }
        }
    }
    newGame()

    function gameLogic() {
        if (checkWinX()) {
            playerXWins()
        }
        if (checkWinO()) {
            playerOWins()
        } else {
            tieGame()
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

    function tieGame() {
        if (cells.every((val) => val.textContent != "")) {
            gameResults.innerHTML = "Tie!!"
            playerDisplay.innerHTML === ""
        }
    }

    function playerXWins() {
        gameResults.innerHTML = playerPrompt1 + " wins the game "
        playerDisplay.innerHTML === ""
        cellsInvisible()
    }

    function playerOWins() {
        gameResults.innerHTML = playerPrompt2 + " wins the game "
        playerDisplay.innerHTML === ""
        cellsInvisible()
    }

    function cellsInvisible() {
        for (var i = 0; i < cells.length; i++) {
            cells[i].classList.add('invisible-box')
        }
    }

    function cellsVisible() {
        for (var i = 0; i < cells.length; i++) {
            cells[i].classList.remove('invisible-box')
        }
    }
})();