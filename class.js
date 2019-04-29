//խոտի կլասը
class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // this.energy = 5;
        this.multiply = 0; //բազմացման գործակից
        this.directions = [];

    }
    //շրջապատի հետազոտության մատրիցը
    newDirections() {
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

    //հետազոտում է շրջապատը, որոնում է հետաքրքրող կերպարներին
    //կերպարը որոշվում է t արգումենտով
    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    //mul() Բազմացում
    mul() {
        this.multiply++;
        if (this.multiply >= 8) {
            //Հետազոտում է շրջապատը, որոնում դատարկ տարածքներ
            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                //Ավելացնում է նոր խոտ խոտերի զանգվածում
                var norXot = new Grass(x, y);
                xotArr.push(norXot);

                //Ավելացնում է նոր խոտի մասին գրառում հիմնական matrix-ում 
                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }
}




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







// class Gg {
//     constructor() {
//         this.multiply = Math.floor(Math.random() * 10);
//         this.directions = [];
//     }
//     newDirections() {
//         this.directions = [
//             [this.x - 2, this.y - 2],
//             [this.x - 1, this.y - 2],
//             [this.x, this.y - 2],
//             [this.x + 1, this.y - 2],
//             [this.x + 2, this.y - 2],
//             [this.x - 2, this.y - 1],
//             [this.x + 2, this.y - 1],
//             [this.x - 2, this.y],
//             [this.x + 2, this.y],
//             [this.x - 2, this.y + 1],
//             [this.x + 2, this.y + 1],
//             [this.x - 2, this.y + 2],
//             [this.x - 1, this.y + 2],
//             [this.x, this.y + 2],
//             [this.x + 1, this.y + 2],
//             [this.x + 2, this.y + 2],
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x, this.y],
//             [this.x + 1, this.y + 1]
//         ];
//     }


//     kill() {
//         this.x = Math.floor(Math.random() * 10);
//         this.y = Math.floor(Math.random() * 10);
//         this.newDirections();
//         for (let l in this.directions) {
//             var x = this.directions[l][0];
//             var y = this.directions[l][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == 1) {
//                     for (var b in xotArr) {
//                         if (this.x == xotArr[b].x && this.y == xotArr[b].y) {
//                             matrix[y][x]=0;
//                             xotArr.splice(b, 1);
//                         }
//                     }
//                 }
//                  else if (matrix[y][x] == 2) {
                   
//                     for (var o in eatArr) {

//                         if (this.x == eatArr[o].x && this.y == eatArr[o].y) {
//                             eatArr.splice(o, 1);
                           
//                         }
//                     }
                    
//                 }
//                 else if (matrix[y][x] == 3) {
//                     matrix[this.y][this.x] = 1;
                  
//                     for (var i in predArr) {

//                         if (this.x == predArr[i].x && this.y == predArr[i].y) {
//                             predArr.splice(i, 1);
                            
//                         }
                        
//                     }
//                 }
//             }
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 matrix[y][x] = 4;
//             }
//         }
//     }

//     meth() {
//         // alert(this.multiply);
//         this.multiply--;
//         // console.log(this.multiply)
//         if (this.multiply <= 0) {
//             this.kill()
//             this.vanish()
//             this.multiply = Math.floor(Math.random() * 10);

//         }
//     }
//     vanish() {
//         this.newDirections();
//         for (let l in this.directions) {
//             var x = this.directions[l][0];
//             var y = this.directions[l][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 matrix[y][x] = 0;
//             }
//         }
//     }

// }














//խոտակերի կլասը
class Eatgrass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 3;
        this.directions = [];
    }

    //շրջապատի հետազոտության մատրիցը
    newDirections() {
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

    //հետազոտում է շրջապատը, որոնում է հետաքրքրող կերպարներին
    //կերպարը որոշվում է t արգումենտով
    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    //move() շարժվել
    move() {
        //որոնում է դատարկ տարածքներ
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            //թարմացնում է սեփական կորդինատները
            this.x = x;
            this.y = y;
        }
    }


    //eat()-ուտել
    eat() {
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var fundCords = this.getDirections(1);
        var cord = random(fundCords);

        //եթե կա հարմար սնունդ
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            //փոխում է սեփական կորդինատները օբյեկտի մեջ
            this.x = x;
            this.y = y;

            //բազմացման գործակիցը մեծացնում է
            this.multiply++;

            //մեծացնում է էներգիան
            this.energy++;

            //!!! ԿԱՐԵՎՈՐ !!! սննդի զանգվածից ջնջում է կերված սնունդը
            //խոտակերի համար դա խոտն է, խոտերի զանգվածի մեջ xotArr
            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            //եթե չկա հարմար սնունդ 
            this.move();
            this.energy--;
            if (this.energy < 0) { //մահանում է, եթե էներգիան 3֊ից ցածր է
                this.die();
            }
        }
    }

    //mul() բազմանալ
    mul() {
        //փնտրում է դատարկ տարածք
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        //եթե կա բազմանում է
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            // this.multiply++;
            //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
            //և տեղադրում է այն խոտակերների զանգվածի մեջ
            var norXotaker = new Eatgrass(x, y);
            eatArr.push(norXotaker);

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 2;
            // this.multiply = 0; //????????
        }
    }

    //die() մահանալ
    die() {
        //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
        matrix[this.y][this.x] = 0;

        //!!! ԿԱՐԵՎՈՐ !!! ջնջում է ինքն իրեն խոտակերների զանգվածից
        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }

}



class Predatory {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 6;
        this.directions = [];
    }

    //շրջապատի հետազոտության մատրիցը
    newDirections() {
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
    //հետազոտում է շրջապատը, որոնում է հետաքրքրող կերպարներին
    //կերպարը որոշվում է t արգումենտով
    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    //move() շարժվել
    move() {
        // naxyntrum e xotaker
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            //թարմացնում է սեփական կորդինատները
            this.x = x;
            this.y = y;
        }
        else {

        }
    }
    //   aaaaa

    //eat()-ուտել
    eat() {
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var fundCords = this.getDirections(2);
        var cord = random(fundCords);

        //եթե կա հարմար սնունդ
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            //փոխում է սեփական կորդինատները օբյեկտի մեջ
            this.x = x;
            this.y = y;

            //բազմացման գործակիցը մեծացնում է
            this.multiply++;

            //մեծացնում է էներգիան
            this.energy++;

            //!!! ԿԱՐԵՎՈՐ !!! սննդի զանգվածից ջնջում է կերված սնունդը
            //խոտակերի համար դա խոտն է, խոտերի զանգվածի մեջ xotArr
            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 11) {
                this.mul()
                this.multiply = 0;
            }


        }
        else {
            //եթե չկա հարմար սնունդ 
            this.move();
            this.energy--;

            if (this.energy <= 0) { //մահանում է, եթե էներգիան 3֊ից ցածր է
                this.die();
            }
        }
    }

    //mul() բազմանալ
    mul() {
        //փնտրում է դատարկ տարածք
        var fundCords = this.getDirections(2);
        var cord = random(fundCords);

        //եթե կա բազմանում է
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            this.multiply++;
            //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
            //և տեղադրում է այն խոտակերների զանգվածի մեջ
            var norPredatory = new Predatory(x, y);
            PredArr.push(norPredatory);

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 2;
            // this.multiply = 0; //????????
        }
    }

    //die() մահանալ
    die() {
        //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
        matrix[this.y][this.x] = 0;

        //!!! ԿԱՐԵՎՈՐ !!! ջնջում է ինքն իրեն gishatichneri zangvacic
        for (var i in predArr) {
            if (this.x == predArr[i].x && this.y == predArr[i].y) {
                predArr.splice(i, 1);
            }

        }
    }

}




// class Hunter {
//     constructor() {
//         this.multiply = Math.floor(Math.random() * 10);
//         this.directions = [];
//     }

//     newDirections() {
//         this.directions = [
//             [this.x - 2, this.y - 2],
//             [this.x - 1, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x + 2, this.y - 2],
//             [this.x + 2, this.y + 2],
//             [this.x + 1, this.y + 1],
//             [this.x - 1, this.y + 1],
//             [this.x - 2, this.y + 2],
//         ];
//     }


//     spand() {
//         this.x = Math.floor(Math.random() * 10);
//         this.y = Math.floor(Math.random() * 10);
//         this.newDirections();
//         for (let l in this.directions) {
//             var x = this.directions[l][0];
//             var y = this.directions[l][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == 2) {
//                     for (var p in eatArr) {
//                         if (this.x == eatArr[p].x && this.y == eatArr[p].y) {
//                             eatArr.splice(p, 1);
//                         }
//                     }
//                 }
//                 else if (matrix[y][x] == 3) {
//                     for (var w in predArr) {
//                         if (this.x == predArr[w].x && this.y == predArr[w].y) {
//                             predArr.splice(w, 1);
//                         }
//                     }
//                 }
//             }
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 matrix[y][x] = 5;
//             }
//         }
//     }

//     system() {
//         this.multiply--;
//         if (this.multiply <= 0) {
//             this.spand()
//             this.delete()
//             this.multiply = Math.floor(Math.random() * 10);

//         }
//     }
//     delete () {
//         this.newDirections();
//         for (let l in this.directions) {
//             var x = this.directions[l][0];
//             var y = this.directions[l][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 matrix[y][x] = 0;
//             }
//         }
//     }

// }

