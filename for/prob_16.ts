/*For16. A real number A and an integer N (> 0) are given. Using one loop-statement
compute and output powers A^K for all integer exponents K in the range 1 to N*/
let A : number = 2;
let range : number = 10;
let power : number = 1;
for(let i = 0; i < range ; i++){
    
    console.log(Math.pow(A,power));
    power++;
}