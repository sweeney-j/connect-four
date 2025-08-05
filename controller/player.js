function Player(name, strategy) {
    this.name = name; 
    this.strategy = strategy;  
}

Player.prototype.move = function() {
    return this.strategy.decideMove(); 
}