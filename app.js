const gameBoard = (function() {
    let board = 
    ['X','O','X','O','X','O','X','O','X','O','X'];
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

          tic.innerHTML = board[0];
          tic1.innerHTML = board[1];
          tic2.innerHTML = board[2];
          tic3.innerHTML = board[5];
          tic4.innerHTML = board[6];
          tic5.innerHTML = board[7];
          tic6.innerHTML = board[8];
          tic7.innerHTML = board[9];
          tic8.innerHTML = board[10]

    }
}
displayBoard()
    const playerGame = (name, marker) => {
        const sayHello = () => console.log('hello!');
        return { name,marker,sayHello
        };

    };
    return {
        displayBoard,
        playerGame,
    };
})();

const player1 = playerGame('Lwazi', 'X');
const player2 = playerGame('Oliva', 'O');