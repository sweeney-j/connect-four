const prompt = require('prompt-sync')(); 
const Board = require('../model/board');
const HumanStrategy = require('../controller/strategies/human-strategy');
const RandomStrategy = require('../controller/strategies/random-strategy');
const Ruleskeeper = require('../model/ruleskeeper'); 

function GameController(board, view) {
    this.board = board; 
    this.view = view; 
}

GameController.prototype.startGame = function() {
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
    console.log(view.render()); 
}

module.exports = GameController; 