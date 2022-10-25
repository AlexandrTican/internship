/*While27. Given an integer N (> 1) that is a Fibonacci number: N = FK, find its order
number K (see the Fibonacci numbers definition in While24).*/
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
console.log(i);