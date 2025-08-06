function Ruleskeeper(board) {
    this.board = board; 
}

Ruleskeeper.prototype.moveValid = function(move) {
    return this.board.grid[0][move - 1] === '_'; 
}

// This is incredibly inefficent. 
Ruleskeeper.prototype.checkWin = function() {
    const rows = this.board.grid.length;
    const cols = this.board.grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const player = this.board.grid[i][j];
            if (player === '_') continue;

            if (
                squareWin(this.board.grid, [[i,j], [i-1,j+1], [i-2,j+2], [i-3,j+3]], player) || 
                squareWin(this.board.grid, [[i,j], [i-1,j-1], [i-2,j-2], [i-3,j-3]], player) || 
                squareWin(this.board.grid, [[i,j], [i,j+1], [i,j+2], [i,j+3]], player) ||       
                squareWin(this.board.grid, [[i,j], [i-1,j], [i-2,j], [i-3,j]], player)  
            ) {
                return true;
            }
        }
    }
    return false;
}


function squareWin(grid, positions, player) {
    for (let [i, j] of positions) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
            return false;
        }
        if (grid[i][j] !== player) {
            return false;
        }
    }
    return true;
}

module.exports = Ruleskeeper; 