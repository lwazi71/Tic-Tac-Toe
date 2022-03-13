const gameBoard = (function() {
    let board = ['X', 'X', 'X', 'X', 'X', 'O', 'O', 'O', 'O'];

    function displayBoard(){
        for(i = 0; i < board.length; i++){
        var tableBody = document.getElementById('t-body');
        const tr = document.createElement('tr');
        const content = `
        <td>${board[0]}</td>
        <td>${board[1]}</td>
        <td>${board[2]}</td>
        <td>${board[3]}</td>
        <td>${board[4]}</td>
        <td>${board[5]}</td>
        <td>${board[6]}</td>
        <td>${board[7]}</td>
        <td>${board[8]}</td>`;

        tr.innerHTML = content;
        tableBody.appendChild(tr)
    }
}
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
