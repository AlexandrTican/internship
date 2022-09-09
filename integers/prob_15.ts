/*Integer15. A three-digit integer is given. Output an integer obtained from the given
one by exchange a tens digit and a hundreds digit (for example, 123 will be
changed to 213).*/
let z : number = 798
let right : number = 798 % 10;
let middle : number = ((z % 100) - right) / 10;
let left : number = Math.floor(z / 100);
let result : number = middle * 100 + left * 10 + right * 1;
console.log("The result is ",result);


//friendship ended with string conversion