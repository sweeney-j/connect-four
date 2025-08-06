function Board(rows, cols) {
    this.rows = rows; 
    this.cols = cols; 
    this.grid = []; 
    this.init(); 
}

Board.prototype.init = function() {
    var colNums = []; 
    for (let i = 1; i <= this.cols; i++) {
        colNums.push(i); 
    }
    for (let i = 0; i < this.rows; i++) {
        let row = []; 
        for (let j = 0; j < this.cols; j++) {
            row.push("_"); 
        }
        this.grid.push(row); 
    }
    this.grid.push(colNums); 
}

Board.prototype.update = function(move, player) {
    for (let i = this.rows; i >= 0; i--) {
        if (this.grid[i][move-1] === '_') {
            this.grid[i][move-1] = player.token; 
            break; 
        }
    }
}

module.exports = Board; 