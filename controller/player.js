function Player(strategy, token) {
    this.strategy = strategy;  
    this.token = token; 
}

Player.prototype.move = function() {
    return this.strategy.makeMove(); 
}

module.exports = Player;