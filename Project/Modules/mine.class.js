class Gg {
    constructor() {
        this.multiply = Math.floor(Math.random() * 10);
        this.directions = [];
    }
    newDirections() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x, this.y],
            [this.x + 1, this.y + 1]
        ];
    }

    eat(){
        this.x = Math.floor(Math.random() * matrix[matrix.length-1].length);
        this.y = Math.floor(Math.random() * matrix.length);
        this.newDirections();
        for(let f in this.directions){
                var x = this.directions[f][0];
                var y = this.directions[f][1];
                if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                    if(matrix[y][x]==1){
                        for (var s in xotArr) {
                            if (x == xotArr[s].x && y == xotArr[s].y) {
                                matrix[y][x] = 0;
                                xotArr.splice(s, 1);
                            }
                        }
                    }
                    if(matrix[y][x]==2){
                        for (var v in eatArr) {
                            if (x == eatArr[v].x && y == eatArr[v].y) {
                                matrix[y][x] = 0;
                                eatArr.splice(v, 1);
                            }
                        }
                    }
                    if(matrix[y][x]==3){
                        for (var w in predArr) {
                            if (x == predArr[w].x && y == predArr[w].y) {
                                matrix[y][x] = 0;
                                predArr.splice(w, 1);
                            }
                        }
                    }
                }
        }
    }
}