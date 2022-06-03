const gameBoard = (() => {
    let initialPLayer = "X";
    let board = [];
    const playerDisplay = document.querySelector("#para-display");
    const gameResults = document.querySelector('#warning');
    const boardIsFull = () => cells.every((val) => val.textContent != "");
    const cells = [...document.querySelectorAll("#box")];
    const playerForm = document.querySelector(".player-form");
    const playerOne = document.getElementById("player1");
    const playerTwo = document.getElementById("player2");
    const playerPlay = document.querySelector(".user");

    function handleForm(event) {
        event.preventDefault();
    }
    playerForm.addEventListener('submit', handleForm);

    playerPlay.addEventListener("click", displayPlayers)

    function displayPlayers() {
        const leftDisplay = document.querySelector(".player1").value
        playerOne.innerHTML = leftDisplay;

        const rightDisplay =  document.querySelector(".player2").value
        playerTwo.innerHTML = rightDisplay;
    }

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
            gameResults.innerHTML = "";
            playerDisplay.innerHTML = "";
            cellsVisible()
        }
    }

    function gameLogic() {
        if (checkWinX()) {
            gameResults.innerHTML = "Player X wins the game"
            playerDisplay.innerHTML === ""
            cellsInvisible()

        }
        if (checkWinO()) {
            gameResults.innerHTML = "Player O wins the game"
            playerDisplay.innerHTML === ""
            cellsInvisible()
        }
        if (boardIsFull()) {
            gameResults.innerHTML = "Tie!!"
            playerDisplay.innerHTML === ""
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