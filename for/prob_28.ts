/*For28. A real number X (|X| < 1) and an integer N (> 0) are given. Compute the
expression
1 + X/2 − 1·X^2/(2·4) + 1·3·X^3/(2·4·6) − … ++ (−1)^N−1·1·3·…·(2*N−3)·X^N/(2·4·…·(2·N)).
The result is an approximate value of the square root of 1 + X*/
let x : number = 0.3
let n : number = 5;
let result : number = 0;

for( let i = 0; i < n; i++){
    result = ((2*n)-3 * Math.pow(x,n)) / (2*n);
    console.log(result) 
}