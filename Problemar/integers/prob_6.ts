/*. A two-digit integer is given. Output its left digit (a tens digit) and then its
right digit (a ones digit). Use the operator of integer division for obtaining the
tens digit and the operator of taking remainder for obtaining the ones digit. */
let x : number = 55
let left : number = Math.floor(x / 10);
let right: number = x % 10;
console.log("left digit is ",left, "right digit is", right);
