const gameBoard = (() => {
    let board = [];

    const boardBoxes = document.querySelectorAll("#display")
    boardBoxes.forEach(e => e.addEventListener('click', playerMovement))
    var XO = "X"

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
        this.innerText = XO;
        XO = (XO == "X" ? "O" :"X")

        function spaceTaken() {
            if (boardBoxes.innerText = "O") {

                for (var i = 0; i < boardBoxes.length; i++) {
                    boardBoxes[i].display = 'block';
                }
            }
        }
        spaceTaken()
    }
})();