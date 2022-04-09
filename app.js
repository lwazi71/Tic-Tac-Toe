const gameBoard = (() => {
    let board = ['X','O','X','O','X','O','X','O','X','O','X'];
    
    function displayBoard(){
        for(i = 0; i < board.length; i++){
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
  
    const boardBoxes = document.querySelectorAll("#display").forEach(e => e.addEventListener('click',playerMovement));
    var XO = "X";

    function playerMovement (){
        this.innerHTML = XO;
        XO = (XO == "X" ? "O" : "X")
    }

    /*
    const createPlayer = (name,marker) => {
           var XO = "X";
        return {name,marker}
    }
    const lwazi = createPlayer('lwazi','X')
    const sophia = createPlayer('sophia','O')
*/
})();

