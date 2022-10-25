/*. A three-digit integer is given. Using one operator of integer division find
first digit of the given integer (a hundreds digit). */
let num: number = 420;
let digit: number = Math.floor(num / 100);
console.log(digit);