const prompt = require('prompt-sync')(); 
const Board = require('./model/board');
const View = require('./view/view'); 
const HumanStrategy = require('./controller/strategies/human-strategy');
const RandomStrategy = require('./controller/strategies/random-strategy');
const GameController = require('./controller/game-controller'); 

function main() {
    const rows = prompt("How many rows would you like this game to be? "); 
    const cols = prompt("How many columns would you like this game to be? "); 
    const playerPreference = prompt("Type 1 to play against an agent or anything else to play against a human "); 
    var board = new Board(rows, cols); 
    var player1 = new HumanStrategy(board);  
    var player2; 
    if (Number(playerPreference) === 1) {
        player2 = new RandomStrategy(board); 
    } else {
        player2 = new HumanStrategy(board); 
    }
    var board = new Board(6, 7); 
    var view = new View(); 
    var controller = new GameController(board, view); 
    controller.startGame(); 
}

main(); 
