function RandomStrategy(board, max) {
    this.board = board; 
    this.max = max; 
}

RandomStrategy.prototype.makeMove = function() {
    return Math.floor(Math.random() * this.max) + 1;
}

module.exports = RandomStrategy; 

