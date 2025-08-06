function Ruleskeeper(board) {
    this.board = board; 
}

Ruleskeeper.prototype.moveValid = function(move) {
    return this.board.grid[0][move - 1] === '_'; 
}

// Narrow down the checks a lot by just evaluating the tile that was just placed 
Ruleskeeper.prototype.checkWin = function(move) {
    // TODO: Implement. 
}

module.exports = Ruleskeeper; 