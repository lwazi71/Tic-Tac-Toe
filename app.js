const gameBoard = (() => {
    var XO = "X";
    let board = [];

    function displayBoard() {
        for (i = 0; i < board.length; i++) {
            const tic = document.querySelector('.cell');
            const tic1 = document.querySelector('.cell1');
            const tic2 = document.querySelector('.cell2');
            const tic3 = document.querySelector('.cell3');
            const tic4 = document.querySelector('.cell4');
            const tic5 = document.querySelector('.cell5');
            const tic6 = document.querySelector('.cell6');
            const tic7 = document.querySelector('.cell7');
            const tic8 = document.querySelector('.cell8');
        }
    }
    displayBoard();

    function playerMovement() {
        XO = (XO == "X" ? "O" : "X")

    }

    function playGame() {
        if (this.innerHTML == '') {
            this.innerHTML = XO;
            playerMovement();
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

})();