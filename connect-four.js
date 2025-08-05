const prompt = require('prompt-sync')(); 
const Board = require('./model/board');
const View = require('./view/view'); 
const HumanStrategy = require('./controller/strategies/human-strategy');
const RandomStrategy = require('./controller/strategies/random-strategy');
const Ruleskeeper = require('./model/ruleskeeper'); 

function main() {
    const rows = prompt("How many rows would you like this game to be? "); 
    const cols = prompt("How many columns would you like this game to be? "); 
    const playerPreference = prompt("Type 1 to play against an agent or anything else to play against a human "); 
    var board = new Board(rows, cols); 
    var ruleskeeper = new Ruleskeeper(board); 
    var player1 = new HumanStrategy(board);  
    var player2; 
    if (Number(playerPreference) === 1) {
        player2 = new RandomStrategy(board); 
    } else {
        player2 = new HumanStrategy(board); 
    }
    var gameOver = false; 
    while (!gameOver) {
        var p1Move = player1.makeMove(); 
        while (!ruleskeeper.moveValid(p1Move)) {
            p1Move = player1.makeMove(); 
        }
        view.render(); 
        gameOver = ruleskeeper.checkWin(p1Move); 
        
        var p2Move = player2.makeMove(); 
        while (!ruleskeeper.moveValid(p2Move)) {
            p2Move = player2.makeMove(); 
        }
        view.render(); 
        gameOver = ruleskeeper.checkWin(p2Move); 
    }
    var view = new View(board);
    console.log(view.render()); 
}

main(); 
