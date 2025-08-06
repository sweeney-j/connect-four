const prompt = require('prompt-sync')(); 
const Board = require('../model/board');
const HumanStrategy = require('../controller/strategies/human-strategy');
const RandomStrategy = require('../controller/strategies/random-strategy');
const Ruleskeeper = require('../model/ruleskeeper'); 


function GameController(board, view, p1, p2) {
    this.board = board; 
    this.view = view; 
    this.p1 = p1; 
    this.p2 = p2; 
}

GameController.prototype.startGame = function() {
    var gameOver = false; 
    var ruleskeeper = new Ruleskeeper(this.board); 
    while (!gameOver) {
        var p1Move = this.p1.move(); 
        while (!ruleskeeper.moveValid(p1Move)) {
            p1Move = this.p1.move(); 
        }
        this.board.update(p1Move, this.p1); 
        console.log(this.view.render()); 
        gameOver = ruleskeeper.checkWin(p1Move); 
        if (gameOver) {
            console.log("Player 1 won the game"); 
            break; 
        }
        
        var p2Move = this.p2.move(); 
        while (!ruleskeeper.moveValid(p2Move)) {
            p2Move = this.p2.move(); 
        }
        this.board.update(p2Move, this.p2); 
        console.log(this.view.render()); 
        gameOver = ruleskeeper.checkWin(p1Move); 
        if (gameOver) {
            console.log("Player 2 won the game"); 
            break; 
        }
    }
}

module.exports = GameController; 