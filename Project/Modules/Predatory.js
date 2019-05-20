var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Predatory extends LiveForm {
    constructor(x, y) {
    super(x, y);
    this.multiply = 0;
}
getNewCoordinates() {
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}

chooseCell(character) {
    this.getNewCoordinates();
    return super.chooseCell(character);
} 
mul() {
    let emptyCells = this.chooseCell(1);
    let newCell = random(emptyCells);

    if (newCell) {
        let x = newCell[0];
        let y = newCell[1];
        matrix[y][x] = 3;
        let predatory = new Predatory(x, y);
        PredatoryArr.push(predatory);
        this.life = 6;
    }
}
eat() {
    let emptyCells = this.chooseCell(2);
    let newCell = random(emptyCells);

    if (newCell) {

        this.life++;
        let x = newCell[0];
        let y = newCell[1];

        matrix[y][x] = 3;
        matrix[this.y][this.x] = 0;

        for (let i in PredatoryArr) {
            if (PredatoryArr[i].x == x && PredatoryArr[i].y == y) {
                PredatoryArr.splice(i, 1)
            }
        }
        this.x = x;
        this.y = y;

        if (this.life >= 8) {
            this.mul();
        }
    }
    else {
        this.move()
    }
}
move() {
    this.life--;
    let emptyCells = this.chooseCell(0);
    let newCell = random(emptyCells);

    if (newCell) {
        let x = newCell[0];
        let y = newCell[1];
        matrix[y][x] = 3;
        matrix[this.y][this.x] = 0;
        this.y = y;
        this.x = x;
    }
    if (this.life < 0) {
        this.die();
    }
}
die() {
    matrix[this.y][this.x] = 0;

    for (let i in PredatoryArr) {
        if (PredatoryArr[i].x == this.x && PredatoryArr[i].y == this.y) {
            PredatoryArr.splice(i, 1)
        }
    }
}
}