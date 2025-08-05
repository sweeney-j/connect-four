function Board(rows, cols) {
    this.rows = rows; 
    this.cols = cols; 
    this.grid = []; 
    this.init(); 
}

Board.prototype.init = function() {
    for (let i = 0; i < this.rows; i++) {
        let row = []; 
        for (let j = 0; j < this.cols; j++) {
            row.push("_"); 
        }
        this.grid.push(row); 
    }
}

Board.prototype.print = function() {
    console.log(this.grid)
}; 

var b = new Board(6,7); 
b.print(); 