/*f25. Given an integer independent variable x, find the value of an integer function f
defined as:
f(x) = 2·x, if x < −2 or x > 2,
−3·x otherwise*/
let x : number = 1;
let y : number = 0;
if( x < - 2 || x > 2){
    y = 2*x;
}else {
    y = -3*x;
}
console.log( "F(x) is : " , y);