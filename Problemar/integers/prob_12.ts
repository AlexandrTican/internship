/*Integer12. A three-digit integer is given. Output an integer obtained from the given
one by reading it from right to left. */
let x : number =325 ;
let right : number = x % 10;
let middle : number = ((x % 100) - right) / 10;
let left : number = Math.floor(x / 100);
console.log("Right digit is ", right, ", middle is ", middle, ", left is", left);
let result : string = right.toString() + middle.toString() + left.toString();
console.log("\n New number is ", result);
