/*For24. A real number X and an integer N (> 0) are given. Compute the expression 
1 − X^2/(2!) + X^4/(4!) − … + (−1)N·X^(2·N)/((2·N)!)
(N! = 1·2·…·N). The result is an approximate value of cos(X). */

let x : number = 3;
let n : number = 2;
let result : number = 0;
let factorial : number = 0;

for (let i = 0;  i < n; i++){

    factorial  = factorial * i;
    result = (-1*n) *Math.pow(x,2*n)/(2 * n) * factorial 
    console.log (result);
}