const prompt = require('prompt-sync')(); 
const Board = require('./model/board');
const View = require('./view/view'); 
const HumanStrategy = require('./controller/strategies/human-strategy');
const RandomStrategy = require('./controller/strategies/random-strategy');
const Player = require('./controller/player'); 
const GameController = require('./controller/game-controller'); 

function main() {
    const rows = prompt("How many rows would you like this game to be? "); 
    const cols = prompt("How many columns would you like this game to be? "); 
    const playerPreference = prompt("Type 1 to play against an agent or anything else to play against a human "); 
    var board = new Board(rows, cols); 
    var view = new View(board); 
    var human = new HumanStrategy(board);  
    var robot = new RandomStrategy(board); 
    var player1 = new Player(human, 'X'); 
    var player2; 
    if (Number(playerPreference) === 1) {
        player2 = new Player(robot, 'O'); 
    } else {
        player2 = new Player(human, 'O'); 
    }
    var controller = new GameController(board, view, player1, player2); 
    controller.startGame(); 
}

main(); 
