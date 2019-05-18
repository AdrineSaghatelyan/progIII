// class Predatory {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.multiply = 0;
//         this.energy = 6;
//         this.directions = [];
//     }

//     //շրջապատի հետազոտության մատրիցը
//     newDirections() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     //հետազոտում է շրջապատը, որոնում է հետաքրքրող կերպարներին
//     //կերպարը որոշվում է t արգումենտով
//     getDirections(t) {
//         this.newDirections();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == t) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }


//     //move() շարժվել
//     move() {
//         // naxyntrum e xotaker
//         var fundCords = this.getDirections(0);
//         var cord = random(fundCords);

//         if (cord) {
//             var x = cord[0];
//             var y = cord[1];

//             //կատարում է տեղափոխություն հիմնական matrix-ում 
//             matrix[y][x] = 3;
//             matrix[this.y][this.x] = 0;

//             //թարմացնում է սեփական կորդինատները
//             this.x = x;
//             this.y = y;
//         }
//         else {

//         }
//     }
//     //   aaaaa

//     //eat()-ուտել
//     eat() {
//         //հետազոտում է շրջակայքը, որոնում է սնունդ
//         var fundCords = this.getDirections(2);
//         var cord = random(fundCords);

//         //եթե կա հարմար սնունդ
//         if (cord) {
//             var x = cord[0];
//             var y = cord[1];

//             //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
//             //իր հին տեղը դնում է դատարկ վանդակ
//             matrix[y][x] = 3;
//             matrix[this.y][this.x] = 0;

//             //փոխում է սեփական կորդինատները օբյեկտի մեջ
//             this.x = x;
//             this.y = y;

//             //բազմացման գործակիցը մեծացնում է
//             this.multiply++;

//             //մեծացնում է էներգիան
//             this.energy++;

//             //!!! ԿԱՐԵՎՈՐ !!! սննդի զանգվածից ջնջում է կերված սնունդը
//             //խոտակերի համար դա խոտն է, խոտերի զանգվածի մեջ xotArr
//             for (var i in eatArr) {
//                 if (x == eatArr[i].x && y == eatArr[i].y) {
//                     eatArr.splice(i, 1);
//                 }
//             }

//             //եթե պատրաստ է բազմացմանը, բազմանում է 
//             if (this.multiply == 11) {
//                 this.mul()
//                 this.multiply = 0;
//             }


//         }
//         else {
//             //եթե չկա հարմար սնունդ 
//             this.move();
//             this.energy--;

//             if (this.energy <= 0) { //մահանում է, եթե էներգիան 3֊ից ցածր է
//                 this.die();
//             }
//         }
//     }

//     //mul() բազմանալ
//     mul() {
//         //փնտրում է դատարկ տարածք
//         var fundCords = this.getDirections(2);
//         var cord = random(fundCords);

//         //եթե կա բազմանում է
//         if (cord) {
//             var x = cord[0];
//             var y = cord[1];
//             this.multiply++;
//             //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
//             //և տեղադրում է այն խոտակերների զանգվածի մեջ
//             var norPredatory = new Predatory(x, y);
//             PredArr.push(norPredatory);

//             //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
//             matrix[y][x] = 2;
//             // this.multiply = 0; //????????
//         }
//     }

//     //die() մահանալ
//     die() {
//         //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
//         matrix[this.y][this.x] = 0;

//         //!!! ԿԱՐԵՎՈՐ !!! ջնջում է ինքն իրեն gishatichneri zangvacic
//         for (var i in predArr) {
//             if (this.x == predArr[i].x && this.y == predArr[i].y) {
//                 predArr.splice(i, 1);
//             }

//         }
//     }

// }
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

        for (let i in grassArr) {
            if (PredatoryArr[i].x == x && grassEaterArr[i].y == y) {
                grassEaterArr.splice(i, 1)
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