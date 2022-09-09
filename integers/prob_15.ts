let z : number = 798
let right : number = 798 % 10;
let middle : number = ((z % 100) - right) / 10;
let left : number = Math.floor(z / 100);
let result : number = middle * 100 + left * 10 + right * 1;
console.log("The result is ",result);


//friendship ended with string conversion