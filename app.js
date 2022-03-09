const gameBoard = (() => {
    let board = ['X','X','X','X','X','O','O','O','O'];
    const playerGame = (name,marker) => {
        const sayHello = () => console.log('hello!');
        return {name,marker,sayHello};
    };
    return {
        playerGame,
        board,
    };
})();

const player1 = playerGame('Lwazi','X');
const player2 = playerGame('Oliva','O');

function render(){
    let game = document.getElementById("board");
    table.innerHTML = "";
    var tr = "";
    board.array.forEach(element => {
        
    });
    

}