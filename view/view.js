function View(board) {
    this.board = board; 
}

View.prototype.render = function() {
    return this.board.grid.map((row) => row.join(' ')).join('\n')
}

module.exports = View; 