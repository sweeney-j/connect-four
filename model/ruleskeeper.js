function Ruleskeeper(board) {
    this.board = board; 
}

Ruleskeeper.prototype.moveValid = function(move) {
    return board[0][move] === '_'; 
}

// Narrow down the checks a lot by just evaluating the tile that was just placed 
Ruleskeeper.prototype.checkWin = function(move) {
    // TODO: Implement. 
}

module.exports = Ruleskeeper; 