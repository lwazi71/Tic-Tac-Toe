const gameBoard = (() => {
    let XO = "X";
    let board = [];
    var playerDisplay = document.querySelector("#para-display")
    var tds = document.querySelectorAll("td");
    
    function playerMovement(){
        if(XO === 'X'){
            XO = "O";
            playerDisplay.innerHTML = "Os turn"
        }
        else {
            XO = "X";
            playerDisplay.innerHTML = "X's turn"
        }
    }
    
    const winningCombos = [
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7]
];
    function checkWinner(XO){
        return winningCombos.some(function (config) {
            return config.every(function (idx) {
                return tds[idx].textContent == XO;
            })
        })
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