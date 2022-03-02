const gameBoard = (() => {
    const playerGame = (name,marker) => {
        return {name,marker};
    };
    const player1 = playerGame('player 1', 'X');
    const player2 = playerGame('player 2', 'O')
    let borard = 
    ['X','X','X','X','X','O','O','O','O'];
    return {
        playerGame,
        player1,
        player2,
        borard,
    };
})();

function render(){
    for(i = 0; i < borard.length; i++){
        let game = document.getElementById("game");


    }
}
