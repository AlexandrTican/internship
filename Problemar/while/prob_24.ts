/*While24. An integer N (> 1) is given. An integer-valued sequence of the Fibonacci
numbers FK is defined as:
F1 = 1, F2 = 1, FK = FK−2 + FK−1, K = 3, 4, … .
Determine whether N is a Fibonacci number or not, and output True or False
respectively.*/
let N : number = 9;
let i : number = 1;
let x : number = Math.pow(N,2);

function isPerfectSquare( x : number){
    let s: number = Math.sqrt(x);
    return( s*s ===x);
}
function isFibonacci(x : number){
    return isPerfectSquare(5*x*x+4)|| isPerfectSquare(5*x*x-4);
}

/*function isPerfectSquare(x)
{
    let s = Math.sqrt(x);
    return (s *s === x);
}
function isFibonacci(n)
{
    return isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4 );
}*/

while( i <=10){
    console.log(isFibonacci(N));
    i++
}