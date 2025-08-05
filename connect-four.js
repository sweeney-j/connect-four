const Board = require('./model/board');
const View = require('./view/view'); 

var board = new Board(6, 7); 
var view = new View(board); 

console.log(view.render()); 