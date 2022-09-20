/*Func40. Write a real-valued function Exp1(x, ε) (x and ε are real numbers, ε > 0) that
returns an approximate value of the function exp(x) defined as follows:
exp(x) = 1 + x + x^2/(2!) + x^3/(3!) + … + x^n/(n!) + …(n! = 1·2·…·n). Stop adding new terms to the sum when the value of the next
term will be less than ε. Using this function, find the approximate values of the
function exp(x) at a given point x for six given ε*/

function factorial ( n : number): number{
    if( n == 0)
        return 1;
    else
        return(n*factorial(n-1));
}
function exp(x :number, epsilon : number){
let sum : number = 0;
let temp : number =0; 
for ( let i = 0; i < epsilon; i++){
    temp = Math.pow(x,i) / factorial(i);
    sum += Math.pow(x,i) / factorial(i);
    console.log(sum);
}
return sum;
}
let a : number = 2;
let b : number = 100;
exp(a,b);