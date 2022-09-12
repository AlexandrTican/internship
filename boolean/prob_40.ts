/*Boolean40. Given coordinates x1, y1, x2, y2 of two chessboard squares (as integers in
the range 1 to 8), verify the following proposition: ―A knight can move from
one square to another during one turn‖*/
let x1 : number = 2;
let y1 : number = 3;
let x2 : number = 3;
let y2 : number = 5;

let check_1 : number = Math.abs(x1-x2);
let check_2 : number = Math.abs(y1-y2);

console.log((check_1 === 2 && check_2 === 1) || (check_1 === 1 && check_2 === 2));