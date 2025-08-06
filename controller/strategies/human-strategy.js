const prompt = require('prompt-sync')(); 

function HumanStrategy(board) {
    this.board = board; 
}

HumanStrategy.prototype.makeMove = function() {
    return prompt('What is your move? (Number 1 - number of columns) '); 
}

module.exports = HumanStrategy; 