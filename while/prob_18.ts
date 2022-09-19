/*While18. Given an integer N (> 0), find the amount and the sum of its digits. Use the
operators of integer division and taking the remainder after integer division. */

let N : number = 15;
let amount : number = 0;
let sum : number =  0;

while (N > 0) {
    N = N / 10;
    
    console.log(N);
}
