function RandomStrategy(board) {
    this.board = board; 
}

RandomStrategy.prototype.makeMove = function() {
    return Math.floor(Math.random() * max) + 1;
}

module.exports = RandomStrategy; 

