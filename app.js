const gameBoard = (() => {
    
    let borard = [];
})();

function render(){
    
}
const playerGame = (name,marker) => {
    const sayName = () => console.log(name);
    return {name,marker,sayName};
};
const lwazi = playerGame('lwazi','X');

console.log(lwazi.name)

lwazi.sayName();